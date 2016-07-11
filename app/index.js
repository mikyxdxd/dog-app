import angular from 'angular';
import 'angular-bootstrap-npm';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-router/release/angular-ui-router.min';
import './component/intro/intro'
import './component/header/header'
import './component/menupage/menupage'
import './component/footer/footer'

import './component/broadcast/broadcastservice';

const ngModule = angular.module('main_app',['ui.bootstrap',require('angular-animate'),'app.header','app.menupage','app.intro','app.footer','ui.router','services.broadcast']);
require ('./config/route')(ngModule);
require ('./component/scroll/scroll')(ngModule);
angular.bootstrap(document,['main_app']);

