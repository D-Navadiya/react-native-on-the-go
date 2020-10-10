import defaults from 'lodash/defaults'; // Import individually to improve performance
import isBoolean from 'lodash/isBoolean';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isNaN from 'lodash/isNaN';
import isNumber from 'lodash/isNumber';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import omit from 'lodash/omit';
import toPairs from 'lodash/toPairs';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class FetchBase {
  url = '';
  targets = '';

  constructor() {}

  rest(url, opts) {
    opts = defaults(opts, {method: 'GET', data: {}});

    let query = '';
    let suffix = '';

    if (opts.method === 'GET') {
      query = `?${this.serialize(opts.data)}`;
      suffix = query === '?' ? '' : query;
    }

    const fullUrl = `${url}${suffix}`;
    const options = this.getOptions(opts);

    return new Promise((resolve, reject) => {
      let hasError = false;
      fetch(fullUrl, options)
        .then((resp) => {
          hasError = !resp.ok;
          return resp.json();
        })
        .then((json) => {
          if (hasError) {
            reject(json);
          }
          resolve(json);
        })
        .catch((er) => reject(er));
    });
  }

  /**
   * @param target
   * @returns {{headers: (*|Headers)}}
   */
  getOptions(target, args = {}) {
    const headers = defaults(target.headers, defaultHeaders);
    const options = {
      ...omit(target, 'args', 'request'),
      headers: this.headers(headers),
      credentials: 'same-origin',
      secure: true,
    };
    // if this is a post request, add form encoded
    // data to the body property of the request
    if (target.method === 'POST') {
      if (!isEmpty(target.data)) {
        options.body = target.data;
      } else {
        const formData = this.getParams(target, args);
        options.body = this.serialize(formData);
      }
    }
    // return options
    return options;
  }

  /**
   * Returns a resolved params object, with all required parameters added
   * @param args
   * @param data
   */
  getParams(target, data) {
    const params = {};

    // iterate through each argument
    [].concat(target.args).forEach((arg, index) => {
      // if it's a string, it's an expected arg, so take it from the data array
      if (isString(arg)) {
        params[arg] = data[index];
      } else if (isObject(arg)) {
        const pairs = toPairs; // underscore/lodash
        const keyValue = pairs(arg)[0];

        // implicit - as denoted by the 'attr' property

        // the argument value is an 'attr' type object, which denotes an implicit value.
        if (isFunction(keyValue[1])) {
          // get and set the implicit value
          params[keyValue[0]] = keyValue[1]();
        } else {
          // default - add default before overwriting with user value
          if (!isEmpty(keyValue[1])) {
            params[keyValue[0]] = keyValue[1];
          }
          // user - overwrite with user value
          if (data.length >= index) {
            const val = data[index];
            if (isString(val) && !!val.length) {
              params[keyValue[0]] = val;
            } else if (isNumber(val) && !isNaN(val)) {
              params[keyValue[0]] = val;
            } else if (isBoolean(val)) {
              params[keyValue[0]] = val;
            }
          }
        }
      }
    });
    return params;
  }

  /**
   * @param params
   * @returns {string}
   */
  serialize(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map((k) => `${esc(k)}=${esc(params[k])}`)
      .join('&');
  }

  /**
   * @param hdrs
   * @returns {*|Headers}
   */
  headers(hdrs) {
    const headers = new Headers();
    Object.keys(hdrs).forEach((h) => {
      headers.append(h, hdrs[h]);
    });
    return headers;
  }
}

export default FetchBase;
