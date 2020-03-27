
const Helpers = {
  setAxiosHeadersConfig: () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return config;
  },

  helper2: (param1) => {
  },

  test1: (param1) => {
    return param1 + ' from helper';
  },
  
  helper3: (param1, param2) => {

  },
  getUrlParameter : (name) => {
    // eslint-disable-next-line
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}

export default Helpers;