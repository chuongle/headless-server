import rp from 'request-promise';
import env from '../environment';

const DRUPAL_URL = env.drupal.url;

const Camden = {
  getCommunities(args) {
    if (args !== undefined) {
      return rp(url + 'node/' + args.nid + '?_format=json')
        .then((res) => JSON.parse(res))
        .then((res) => {
          return { nid: res.nid[0].value, title: res.title[0].value };
        });
    }

    return rp(url + 'api/communities')
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res;
      });
  },
};

export { Camden };
