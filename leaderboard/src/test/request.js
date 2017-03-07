// this actually does a real network request which might be good one day.
// But, for the moment probably not.

import http from "http";

export default function(url) {
    return new Promise((req, res) => {

        http.get({path: url}, res => {
            let data = '';
            res.on('data', _data => data += data);
            res.on('end', () => res(data));
        })
    })
}