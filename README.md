# Pulse
#### Experimental Twitter and code standard

[![npm version](https://badge.fury.io/js/twttr-pulse.svg)](https://badge.fury.io/js/twttr-pulse)
![dependencies](https://david-dm.org/edravis/pulse.svg)
[![wercker status](https://app.wercker.com/status/25e741c3ed25394fc2aaf15fbe8e4558/s/master "wercker status")](https://app.wercker.com/project/bykey/25e741c3ed25394fc2aaf15fbe8e4558)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
![badgifier-istanbul-cobertura](https://img.shields.io/badge/coverage-82.14-green.svg)

## Install
Giving the experimental nature of this repo is recommended to don't install it using `npm` becuase it's possible that you run with an outdated version.

```
git clone https://github.com/edravis/pulse.git
cd pulse
npm install
npm test
```

## Getting started
In order to bring to life this *Pulse* you need:
* nodejs ^4.2.1
* a Twitter app account

If you don't have any Twitter app you can create one [at the apps dashboard](https://apps.twitter.com/). When you have the app created you have to create a file called `auth.json` placed at the root of the project. I've already added a default file for you. So, you can duplicate `auth_default.json` to `auth.json` and fill up the document. By the way, you may are interested to know that the `.gitignore` covers the `auth.json` file ;)

## Contribute
I'm currently using this repo as lab for experiment with the meta configuration of the Javascript's projects: testing, coding standard, code coverage, continous integration, etc. If you think something is messed up or you want to add something feel free to comment, ask, PR, or whatever. However, in order to make it easy, here's my little roadmap:

- [x] Unit testing
- [x] Automatic documentation
- [x] Code coverage
- [x] Badgifier
- [x] Coding standard
- [x] Continous integration
- [ ] Commitizen
- [ ] Pre-commit hooks
- [ ] Automatic changelog
- [ ] Semver
- [ ] Automatic generate reports for releases

## Docs
Using [documentation.js](http://documentation.js.org/) it generated automatic documentation. You'll find it on the `docs` folder at the project's root. The generated output is a simply `.html` so run it with whatever you use to work. I really like `http-server`.

## Coverage
After the tests the project also generates the automatic code coverage thanks to [instabul](https://gotwarlost.github.io/istanbul/). You can access to the results on `coverage/lcov-report` placed at root. It's a simply `.html` directory.

### That's all! Enjoy and hack!
**With all the love from [Rubén Sospedra](http://twitter.com/sospedra_r)**

