Examples of `monero-javascript` breaking when called from within a `worker_thread` in NodeJS.

It breaks in https://github.com/monero-ecosystem/monero-javascript/blob/master/src/main/js/common/LibraryUtils.js, lines 165/166

See README in each dir for instructions

I've been using Node `v16.11.1` for these tests, but I've seen them in all the versions I've used recently.