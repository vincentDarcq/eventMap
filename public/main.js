(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vincentdarcq/Documents/workspaces/EventMap/src/main.ts */"zUnb");


/***/ }),

/***/ "0nKt":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/events-api.service.ts ***!
  \*******************************************************/
/*! exports provided: EventsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsApiService", function() { return EventsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/event */ "QrpZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.service */ "6BoG");





class EventsApiService {
    constructor(http, eventService) {
        this.http = http;
        this.eventService = eventService;
        this.oauth_consumer_key = "a14d1c112fde9c831ff661131e0c9a74aa9245b1";
        this.oauth_signature = 'PlcsrTwPRsL92IJgtOfphj/N/8Q=';
        // url: string = "http://api.music-story.com/oauth/request_token?";
        // request: string = this.url+'oauth_consumer_key='+this.oauth_consumer_key;
        this.secret_client_predicthq = 'pXvVMluSU15u-SCe-VGGuPqursMVXPvv8JITamlKQHe2fbmMdeEz0w';
        this.client_ID_predicthq = 'CeHqBL1ZrqQ';
        this.token_predicthq = 'aWmqoOlYofV-atAnbidoNjtupvopmThQOHbUyp7Z';
    }
    // signRequestForMusicStory(){
    //   this.http.get<string>('/api/music_story/sign_request', {
    //     params: {
    //       oauth_consumer_key: this.oauth_consumer_key
    //     }
    //   })
    //   .subscribe( (res) => {
    //     this.request = this.request+'&oauth_signature='+res;
    //   })
    // }
    callOpenData() {
        // const date = new Date("2021-11-09T19:30:00").toLocaleString()
        // console.log(date)
        for (let i = 0; i < 3000; i += 20) {
            this.http.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=20&start=${i}&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.tags=concert&refine.date_start=2022&timezone=Europe%2FParis`)
                .subscribe(res => {
                res.records.forEach(element => {
                    const f = element.fields;
                    let event = new _models_event__WEBPACK_IMPORTED_MODULE_1__["Event"]();
                    event.setName(f.title);
                    event.setDescription(f.free_text);
                    event.setLieu(f.address);
                    event.setLatitude(f.latlon[0]);
                    event.setLongitude(f.latlon[1]);
                    const timetable = f.timetable.split(" ");
                    event.setDateDebut(new Date(timetable[0]));
                    event.setDateFin(new Date(timetable[1]));
                    event.setSpaceAndTime(f.space_time_info);
                    event.setCreateByOwner(false);
                    event.setPricingInfo(f.pricing_info);
                    event.setType("Concert");
                    event.setScope("public");
                    event.setImageUrl(f.image);
                    this.eventService.createEvent(event);
                });
            });
        }
    }
    getEventsFromPredictHQ(offset) {
        return this.http.get('https://api.predicthq.com/v1/events', {
            headers: {
                Authorization: "Bearer aWmqoOlYofV-atAnbidoNjtupvopmThQOHbUyp7Z",
                Accept: "application/json"
            },
            params: {
                country: "FR",
                limit: "10000",
                offset: `${offset}`
            }
        });
    }
}
EventsApiService.ɵfac = function EventsApiService_Factory(t) { return new (t || EventsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"])); };
EventsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsApiService, factory: EventsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }]; }, null); })();


/***/ }),

/***/ "1brn":
/*!**************************************************!*\
  !*** ./src/app/shared/models/map-point.model.ts ***!
  \**************************************************/
/*! exports provided: MapPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPoint", function() { return MapPoint; });
class MapPoint {
    constructor() { }
}


/***/ }),

/***/ "5Fl7":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/user.model */ "KJJU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function SigninComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.signInWithFB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In With Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Out From Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.error);
} }
class SigninComponent {
    constructor(fb, router, authService, authSocialService, userService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.authSocialService = authSocialService;
        this.userService = userService;
        this.socialUser = new angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialUser"]();
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [''],
            password: ['']
        });
        this.authSocialService.authState.subscribe((user) => {
            console.log(user);
            this.socialUser = user;
            this.loggedIn = (user != null);
        });
    }
    submit() {
        this.authService.signin(this.form.value).subscribe(() => {
            this.userService.setCurrentUser();
            this.router.navigate(['/']);
        }, err => {
            this.error = err.error;
        });
    }
    signInWithFB() {
        this.authSocialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authSocialService.signOut();
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 20, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "my-5", "py-5"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px", 3, "formGroup"], ["formControlName", "email", "matInput", "", "type", "text", "placeholder", "email"], ["formControlName", "password", "matInput", "", "type", "test", "placeholder", "mot de passe"], ["color", "error", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click"], ["color", "error"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Se connecter avec Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SigninComponent_button_6_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SigninComponent_button_7_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SigninComponent_mat_error_17_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "6BoG":
/*!**************************************************!*\
  !*** ./src/app/shared/services/event.service.ts ***!
  \**************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/event */ "QrpZ");
/* harmony import */ var _models_left_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/left-time */ "Nvv0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class EventService {
    constructor(http, zone) {
        this.http = http;
        this.zone = zone;
        this.eventNameFromTopBar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Array());
        this.currentDate = new Date();
        let ev = new Array();
        this.http.get('/api/event/getAll').subscribe((events) => {
            for (let event of Object.keys(events)) {
                const e = events[event];
                let newEvent = new _models_event__WEBPACK_IMPORTED_MODULE_3__["Event"](e._id, e.name, new Date(e.dateDebut), e.beginTime, new Date(e.dateFin), e.endTime, e.type, e.description, e.lieu, e.latitude, e.longitude, e.createur, e.emailCreateur, this.timeBefore(e.dateDebut), e.createByOwner);
                if (new Date(e.dateDebut).getHours() === 0 && new Date(e.dateDebut).getMinutes() === 0) {
                    newEvent.setDateDebutString(new Date(e.dateDebut).toLocaleString().substring(0, 10));
                }
                else {
                    newEvent.setDateDebutString(new Date(e.dateDebut).toLocaleString());
                }
                if (e.dateFin !== null) {
                    newEvent.setDateFin(new Date(e.dateFin));
                }
                else {
                    newEvent.setDateFin(null);
                }
                newEvent.setInvites(e.invites);
                newEvent.setScope(e.scope);
                newEvent.setSpaceAndTime(e.space_and_time);
                newEvent.setPricingInfo(e.pricing_info);
                newEvent.image1 = e.image1;
                newEvent.image2 = e.image2;
                newEvent.image3 = e.image3;
                if (newEvent.getDateFin()) {
                    const time_before_end = this.timeBefore(newEvent.getDateFin());
                    if (time_before_end.days < 0 || time_before_end.hours < 0 || time_before_end.minutes < 0) {
                        this.deleteEvent(newEvent._id);
                    }
                    else {
                        ev.push(newEvent);
                    }
                }
                else {
                    if (newEvent.getTimeLeft().days < 0) {
                        console.log(newEvent.getTimeLeft().days);
                        this.deleteEvent(newEvent._id);
                    }
                    else {
                        ev.push(newEvent);
                    }
                }
            }
            this.events.next(ev);
        });
    }
    createEvent(event, formData) {
        this.http.post('/api/event/create', event).subscribe((e) => {
            if (formData) {
                this.http.post('/api/event/uploadImages', formData, {
                    params: {
                        eventId: e._id
                    }
                }).subscribe((upload) => {
                    if (upload.image1) {
                        e.image1 = upload.image1;
                    }
                    if (upload.image2) {
                        e.image2 = upload.image2;
                    }
                    if (upload.image3) {
                        e.image3 = upload.image3;
                    }
                    this.addEvent(e);
                });
            }
            else {
                this.addEvent(e);
            }
        });
    }
    addEvent(e) {
        e.setTimeLeft(this.timeBefore(e.dateDebut));
        e.setDateDebut(new Date(e.dateDebut));
        e.setDateFin(new Date(e.dateFin));
        e.setDateDebutString(new Date(e.dateDebut).toLocaleString());
        e.setDateFinString(new Date(e.dateFin).toLocaleString());
        this.events.next([...this.events.value, e]);
    }
    editEvent(event, formData) {
        this.http.put('/api/event/modify', event).subscribe((e) => {
            const index = this.getIndexEvent(e._id);
            if (formData) {
                this.http.post('/api/event/uploadImages', formData, {
                    params: {
                        eventId: e._id
                    }
                }).subscribe((upload) => {
                    if (upload.image1) {
                        e.image1 = upload.image1;
                    }
                    if (upload.image2) {
                        e.image2 = upload.image2;
                    }
                    if (upload.image3) {
                        e.image3 = upload.image3;
                    }
                    this.replaceEvent(index, e);
                });
            }
            else {
                if (index >= 0) {
                    this.replaceEvent(index, e);
                }
            }
        });
    }
    replaceEvent(index, e) {
        let ev = this.events.value;
        let editEvent = new _models_event__WEBPACK_IMPORTED_MODULE_3__["Event"](e._id, e.name, new Date(e.dateDebut), e.beginTime, new Date(e.dateFin), e.endTime, e.type, e.description, e.lieu, e.latitude, e.longitude, e.createur, e.emailCreateur);
        editEvent.setDateDebut(new Date(e.dateDebut));
        editEvent.setDateDebutString(new Date(e.dateDebut).toLocaleString());
        editEvent.setDateFinString(new Date(e.dateFin).toLocaleString());
        editEvent.setTimeLeft(this.timeBefore(e.dateDebut));
        editEvent.setScope(e.scope);
        editEvent.setInvites(e.invites);
        editEvent.image1 = e.image1;
        editEvent.image2 = e.image2;
        editEvent.image3 = e.image3;
        ev.splice(index, 1, ...[editEvent]);
        this.events.next(ev);
    }
    getEventsByUser(email) {
        let e = new Array();
        for (let event of this.events.value) {
            if (event.getEmailCreateur() === email) {
                e.push(event);
            }
        }
        return e;
    }
    deleteEvent(eventId) {
        this.http.delete('/api/event/deleteOne', {
            params: {
                eventId: eventId
            }
        }).subscribe(() => {
            let events = this.events.value;
            const index = events.findIndex((event) => event._id === eventId);
            events.splice(index, 1);
            this.events.next(events);
        }, (e) => {
            console.log(e);
        });
    }
    getEvent(id) {
        for (let event of this.events.value) {
            if (event._id === id) {
                return event;
            }
        }
    }
    setBounds(bounds) {
        this.zone.run(() => {
            this.bounds.next(bounds);
        });
    }
    getBounds() {
        return this.bounds;
    }
    timeBefore(date) {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('fr-FR');
        const fd = new Date(datePipe.transform(date, 'yyyy-MM-dd HH:mm'));
        const diff = fd.getTime() - this.currentDate.getTime();
        let days = Math.floor((diff / 1000) / 60);
        const mins = days % 60;
        days = Math.floor((days - mins) / 60);
        const hours = days % 24;
        days = Math.floor((days - hours) / 24);
        const leftTime = new _models_left_time__WEBPACK_IMPORTED_MODULE_4__["LeftTime"](days, hours, mins);
        return leftTime;
    }
    getIndexEvent(id) {
        return this.events.value.findIndex((event) => event._id === id);
    }
    setEventFromTopBar(event) {
        this.eventNameFromTopBar.next(event);
    }
    getEventFromTopBar() {
        return this.eventNameFromTopBar;
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H06L":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('jwt');
        const urlGeo = req.url.match('geoapify');
        if (token && urlGeo === null) {
            const authReq = req.clone({
                headers: req.headers.set('authorization', token),
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.jwtToken = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            isAuthenticated: null,
            token: null,
        });
        this.initToken();
        this.subscription = this.initTimer();
    }
    initTimer() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 250000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            if (localStorage.getItem('jwt')) {
                return this.http.get('/api/auth/refresh-token').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((token) => {
                    this.jwtToken.next({
                        isAuthenticated: true,
                        token: token
                    });
                    localStorage.setItem('jwt', token);
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        })).subscribe(() => { }, err => {
            this.jwtToken.next({
                isAuthenticated: false,
                token: null
            });
            localStorage.removeItem('jwt');
            this.subscription.unsubscribe();
        });
    }
    initToken() {
        const token = localStorage.getItem('jwt');
        if (token) {
            this.jwtToken.next({
                isAuthenticated: true,
                token: token,
            });
        }
        else {
            this.jwtToken.next({
                isAuthenticated: false,
                token: null,
            });
        }
    }
    signup(user) {
        return this.http.post('/api/auth/signup', user);
    }
    signin(credentials) {
        return this.http.post('/api/auth/signin', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((token) => {
            this.jwtToken.next({
                isAuthenticated: true,
                token: token,
            });
            localStorage.setItem('jwt', token);
            this.subscription = this.initTimer();
        }));
    }
    editPassword(infos) {
        return this.http.post('/api/auth/editPass', infos);
    }
    logout() {
        this.jwtToken.next({
            isAuthenticated: false,
            token: null,
        });
        localStorage.removeItem('jwt');
        this.route.navigate(['/']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ifbd":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/geo-response.model.ts ***!
  \*****************************************************/
/*! exports provided: GeoResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoResponse", function() { return GeoResponse; });
class GeoResponse {
    constructor(latitude, longitude, address) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }
}


/***/ }),

/***/ "JCQt":
/*!**********************************************************!*\
  !*** ./src/app/other-profile/other-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: OtherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherProfileComponent", function() { return OtherProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _shared_models_ask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/ask */ "UvdT");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/network.service */ "SVtl");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function OtherProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Vous \u00EAtes amis avec ", ctx_r0.profile, " ");
} }
function OtherProfileComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherProfileComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.askFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Demander en ami cet organisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherProfileComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherProfileComponent_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.cancelAskFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Annuler la demande d'ami");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherProfileComponent_div_6_button_1_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OtherProfileComponent_div_6_button_2_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.profile_type === "priv\u00E9" && ctx_r1.currentUser.profile_type === "priv\u00E9" && !ctx_r1.asked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.profile_type === "priv\u00E9" && ctx_r1.currentUser && ctx_r1.currentUser.profile_type === "priv\u00E9" && ctx_r1.asked);
} }
function OtherProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherProfileComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.acceptFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accepter sa demande d'ami");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherProfileComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deniedFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Refuser sa demande d'ami");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { _id: a0 }; };
const _c1 = function (a1) { return ["/eventDetail", a1]; };
function OtherProfileComponent_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherProfileComponent_mat_card_content_9_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.displayEvent(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, event_r13._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r13.dateDebutString);
} }
class OtherProfileComponent {
    constructor(userService, networkService, eventService, route) {
        this.userService = userService;
        this.networkService = networkService;
        this.eventService = eventService;
        this.route = route;
        this.asked = false;
        this.toAnswer = false;
        this.friend = false;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.events = new Array();
        this.asks = new Array();
    }
    ngOnInit() {
        this.profile = this.route.snapshot.paramMap.get('user');
        this.userService.getUser(this.profile).subscribe((user) => {
            this.user = user;
            if (this.events.length === 0) {
                this.events = this.eventService.getEventsByUser(user.email);
            }
        });
        this.subscription = this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
        this.networkService.getAsks().subscribe((asks) => {
            for (let ask of Object.keys(asks)) {
                const a = asks[ask];
                const newAsk = new _shared_models_ask__WEBPACK_IMPORTED_MODULE_2__["Ask"](a._id, a.demandeur, a.destinataire);
                this.asks.push(newAsk);
            }
        });
    }
    ngDoCheck() {
        if (this.currentUser && this.user && !this.friend) {
            for (let ami of this.user.amis) {
                if (ami === this.currentUser.name) {
                    this.friend = true;
                }
            }
        }
        if (this.asks.length > 0 && !this.asked && this.currentUser) {
            for (let ask of this.asks) {
                this.ask = new _shared_models_ask__WEBPACK_IMPORTED_MODULE_2__["Ask"](ask.id, ask.demandeur, ask.destinataire);
                if (ask.demandeur === this.currentUser.name && ask.destinataire === this.profile) {
                    this.asked = true;
                }
                else if (ask.demandeur === this.profile && ask.destinataire === this.currentUser.name) {
                    this.toAnswer = true;
                }
            }
        }
    }
    askFriend() {
        this.networkService.askFriend({
            demandeur: this.currentUser.name,
            destinataire: this.profile
        }).subscribe((ask) => {
            this.asks.push(ask);
            this.asked = true;
        });
    }
    cancelAskFriend() {
        this.networkService.deleteAsk(this.ask.id).subscribe(() => {
            this.asks.splice(this.asks.indexOf(this.ask, 1));
            this.asked = false;
        });
    }
    acceptFriend() {
        this.networkService.acceptFriend(this.ask.id, this.currentUser.name, this.profile).subscribe((res) => {
            this.asks.splice(this.asks.indexOf(res, 1));
            this.userService.updateListFriends(this.currentUser, this.profile, "add");
            this.toAnswer = false;
            this.friend = true;
        });
    }
    deniedFriend() {
        this.networkService.deniedFriend(this.ask.id).subscribe((res) => {
            this.asks.splice(this.asks.indexOf(res, 1));
            this.toAnswer = false;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
OtherProfileComponent.ɵfac = function OtherProfileComponent_Factory(t) { return new (t || OtherProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
OtherProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherProfileComponent, selectors: [["app-other-profile"]], decls: 10, vars: 5, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px", 1, "mt-1", "mr-1"], ["fxFlex", "auto"], ["class", "ami", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "5px"], [4, "ngFor", "ngForOf"], [1, "ami"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"], [1, "nav-link", 3, "routerLink"], ["id", "event", 1, "card-body", 3, "click"]], template: function OtherProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OtherProfileComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OtherProfileComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OtherProfileComponent_div_7_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OtherProfileComponent_mat_card_content_9_Template, 11, 8, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ev\u00E8nements de ", ctx.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.friend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser && !ctx.toAnswer && !ctx.friend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.ami[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  background-color: #12577f;\n  color: white;\n  padding-top: 8px;\n  border-radius: 20%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\na[_ngcontent-%COMP%]{\n  color: black;\n}\n\nmat-card[_ngcontent-%COMP%]{\n  padding: 0;\n  background-color: #eee;\n  box-shadow: none !important;\n}\n\nmat-card-content[_ngcontent-%COMP%]{\n  float: none;\n  clear: none;\n  border-style: none;\n  border-width: 1px;\n  border-color: rgba(7, 0, 0, 0.98);\n  border-radius: 20px;\n  box-shadow: inset -2px -2px 5px 0 #000;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  perspective: 824px;\n  transform: perspective(216px);\n  font-weight: 400;\n  background-clip: padding-box;\n  cursor: pointer;\n  background-color: #e5e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFFNUIsa0JBQWtCO0VBRWxCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0IiLCJmaWxlIjoib3RoZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFtaSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI1NzdmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuYXtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtY2FyZHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2FyZC1jb250ZW50e1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg3LCAwLCAwLCAwLjk4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDVweCAwICMwMDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogODI0cHg7XG4gIHBlcnNwZWN0aXZlOiA4MjRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIxNnB4KTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMTZweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTFlMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-profile',
                templateUrl: './other-profile.component.html',
                styleUrls: ['./other-profile.component.css']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "JESc":
/*!****************************************************!*\
  !*** ./src/app/event-list/event-list.component.ts ***!
  \****************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EventListComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventListComponent_div_1_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.displayEvent(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.dateDebutString);
} }
function EventListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventListComponent_div_1_div_1_Template, 8, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.eventsOnMapFiltered);
} }
function EventListComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventListComponent_ng_template_2_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.displayEvent(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.dateDebutString);
} }
function EventListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventListComponent_ng_template_2_div_0_Template, 8, 3, "div", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.eventsOnMap);
} }
class EventListComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newBounds = false;
        this.filter = false;
        this.eventsOnMap = new Array();
        this.eventsOnMapFiltered = new Array();
    }
    ngOnInit() {
        this.eventService.getBounds().subscribe((b) => {
            this.bounds = b;
            this.newBounds = true;
        });
    }
    ngDoCheck() {
        if (this.events.length > 0 && this.newBounds) {
            this.eventsOnMap = new Array();
            for (let event of this.events) {
                if (this.bounds.contains(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](event.latitude, event.longitude))) {
                    this.eventsOnMap.push(event);
                }
            }
            this.newBounds = false;
        }
    }
    ngOnChanges(changes) {
        const inputFiltersType = changes.inputFiltersType;
        const inputFiltersDate = changes.inputFiltersDate;
        if (typeof inputFiltersType !== 'undefined' && inputFiltersType.currentValue !== null && typeof inputFiltersType.currentValue[0] !== 'undefined') {
            this.eventsOnMapFiltered = new Array();
            for (let event of this.eventsOnMap) {
                if (this.inputFiltersType.indexOf(event.type) !== -1) {
                    this.eventsOnMapFiltered.push(event);
                }
            }
            this.filter = true;
        }
        else if (typeof inputFiltersDate !== 'undefined' && inputFiltersDate.currentValue !== null && typeof inputFiltersDate.currentValue[0] !== 'undefined') {
            this.eventsOnMapFiltered = new Array();
            for (let event of this.eventsOnMap) {
                if (this.inputFiltersDate.indexOf("1 jour") !== -1) {
                    if (event.timeLeft.days <= 1) {
                        this.eventsOnMapFiltered.push(event);
                    }
                }
                if (this.inputFiltersDate.indexOf("2 jours") !== -1) {
                    if (event.timeLeft.days <= 2) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("3 jours") !== -1) {
                    if (event.timeLeft.days <= 3) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("4 jours") !== -1) {
                    if (event.timeLeft.days <= 4) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("5 jours") !== -1) {
                    if (event.timeLeft.days <= 5) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("6 jours") !== -1) {
                    if (event.timeLeft.days <= 6) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("1 semaine") !== -1) {
                    if (event.timeLeft.days <= 7) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("2 semaines") !== -1) {
                    if (event.timeLeft.days <= 14) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("3 semaines") !== -1) {
                    if (event.timeLeft.days <= 21) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
                if (this.inputFiltersDate.indexOf("1 mois") !== -1) {
                    if (event.timeLeft.days <= 28) {
                        if (this.eventsOnMapFiltered.indexOf(event) === -1) {
                            this.eventsOnMapFiltered.push(event);
                        }
                    }
                }
            }
            this.filter = true;
        }
        else {
            this.eventsOnMapFiltered = new Array();
            this.filter = false;
        }
    }
    displayEvent(index) {
        this.event = this.eventsOnMap[index];
        this.outputEvent.emit(this.event);
    }
}
EventListComponent.ɵfac = function EventListComponent_Factory(t) { return new (t || EventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"])); };
EventListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventListComponent, selectors: [["app-event-list"]], inputs: { inputFiltersType: "inputFiltersType", inputFiltersDate: "inputFiltersDate", events: "events" }, outputs: { outputEvent: "outputEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "list"], [4, "ngIf", "ngIfElse"], ["nofilters", ""], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["id", "event", 1, "card-body", 3, "click"], ["id", "titre"]], template: function EventListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventListComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".list[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow-y: scroll;  \n}\n\n@media only screen and (max-width: 500px) {\n  \n  .list[_ngcontent-%COMP%] {\n    height: 26vh;\n    padding: 10px;\n    overflow:scroll;\n  }\n\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n#event[_ngcontent-%COMP%] {\n  float: none;\n  clear: none;\n  border-style: none;\n  border-width: 1px;\n  border-color: rgba(7, 0, 0, 0.98);\n  border-radius: 20px;\n  box-shadow: inset -2px -2px 5px 0 #000;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  perspective: 824px;\n  transform: perspective(216px);\n  font-weight: 400;\n  background-clip: padding-box;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding:0;\n  height: 80px;\n  display: flex;\n  flex-flow: column nowrap;\n  background: #b0c9f3;\n  cursor: pointer;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #eee;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n\n#titre[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUY7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1QixrQkFBa0I7RUFFbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZXZlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAubGlzdCB7XG4gICAgaGVpZ2h0OiAyNnZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICB9XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNldmVudCB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDcsIDAsIDAsIDAuOTgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggNXB4IDAgIzAwMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA4MjRweDtcbiAgcGVyc3BlY3RpdmU6IDgyNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjE2cHgpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIxNnB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6MDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGJhY2tncm91bmQ6ICNiMGM5ZjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHJlIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-list',
                templateUrl: './event-list.component.html',
                styleUrls: ['./event-list.component.css']
            }]
    }], function () { return [{ type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }]; }, { inputFiltersType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputFiltersDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "JGpI":
/*!********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.ts ***!
  \********************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/event.component */ "p/l/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _event_chat_event_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-chat/event-chat.component */ "o9Tl");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









const _c0 = function () { return { "height": "200px", "width": "220px" }; };
function EventDetailComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.event.image1 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("src", ctx_r0.serverImg + ctx_r0.event.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventDetailComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.event.image2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("src", ctx_r1.serverImg + ctx_r1.event.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventDetailComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.event.image3 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("src", ctx_r2.serverImg + ctx_r2.event.image3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventDetailComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.event.imageUrl && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("src", ctx_r3.event.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class EventDetailComponent {
    constructor(eventService, activatedRoute) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.serverImg = "/upload?img=";
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.idEvent = params.get('_id');
        });
        this.eventService.events.subscribe((events) => {
            const id = events.findIndex((event) => this.idEvent === event._id);
            this.event = events[id];
        });
    }
}
EventDetailComponent.ɵfac = function EventDetailComponent_Factory(t) { return new (t || EventDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EventDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailComponent, selectors: [["app-event-detail"]], decls: 10, vars: 7, consts: [["fxLayout", "row", "fxLayout.xs", "column", 1, "container"], ["fxLayout", "column", "fxLayout.xs", "row", "fxFlex", "50", "fxFlex.xs", "50", "id", "event"], [3, "details", "inputEvent"], ["fxLayout", "row", "fxLayoutGap", "5px"], ["alt", "image 1", 3, "ngStyle", "src", 4, "ngIf"], ["alt", "image 2", 3, "ngStyle", "src", 4, "ngIf"], ["alt", "image url", 3, "ngStyle", "src", 4, "ngIf"], ["fxFlex", "50", "fxFlex.xs", "50"], [3, "event"], ["alt", "image 1", 3, "ngStyle", "src"], ["alt", "image 2", 3, "ngStyle", "src"], ["alt", "image url", 3, "ngStyle", "src"]], template: function EventDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-event", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventDetailComponent_img_4_Template, 1, 3, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventDetailComponent_img_5_Template, 1, 3, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventDetailComponent_img_6_Template, 1, 3, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventDetailComponent_img_7_Template, 1, 3, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-event-chat", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", true)("inputEvent", ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.image1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.image2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.image3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx.event);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _event_chat_event_chat_component__WEBPACK_IMPORTED_MODULE_6__["EventChatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\n@media only screen and (max-width: 500px) {\n  \n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCO0lBQ0UsYUFBYTtFQUNmOztBQUVGIiwiZmlsZSI6ImV2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-detail',
                templateUrl: './event-detail.component.html',
                styleUrls: ['./event-detail.component.css']
            }]
    }], function () { return [{ type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "JuYP":
/*!***************************************************************!*\
  !*** ./src/app/auth/edit-password/edit-password.component.ts ***!
  \***************************************************************/
/*! exports provided: EditPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordComponent", function() { return EditPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function EditPasswordComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditPasswordComponent {
    constructor(fb, authService, router, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.email = this.route.snapshot.paramMap.get('email');
        this.form = this.fb.group({
            email: [this.email],
            oldPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    submit() {
        this.authService.editPassword(this.form.value).subscribe(() => {
            this.router.navigate(['/']);
        }, err => {
            this.error = err.error;
        });
    }
}
EditPasswordComponent.ɵfac = function EditPasswordComponent_Factory(t) { return new (t || EditPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
EditPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPasswordComponent, selectors: [["app-edit-password"]], decls: 13, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "my-5", "py-5"], ["fxLayout", "column", "fxLayoutGap", "15px", 3, "formGroup"], ["formControlName", "oldPass", "matInput", "", "type", "text", "placeholder", "ancien mot de passe"], ["formControlName", "newPass", "matInput", "", "type", "test", "placeholder", "nouveau mot de passe"], ["color", "error", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["color", "error"]], template: function EditPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Changement de Mot de Passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditPasswordComponent_mat_error_10_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPasswordComponent_Template_button_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Changer mon mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-password',
                templateUrl: './edit-password.component.html',
                styleUrls: ['./edit-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "KJJU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, email, name, profile_type, amis) {
        this._id = id;
        this.email = email;
        this.name = name;
        this.profile_type = profile_type;
        this.amis = amis;
    }
    setEmail(email) {
        this.email = email;
    }
    setName(name) {
        this.name = name;
    }
    setAmis(amis) {
        this.amis = amis;
    }
}


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "kmKP");






class AuthGuard {
    constructor(authService, http, userService) {
        this.authService = authService;
        this.http = http;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.authService.jwtToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((jwtToken) => {
            return jwtToken.isAuthenticated;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Nvv0":
/*!********************************************!*\
  !*** ./src/app/shared/models/left-time.ts ***!
  \********************************************/
/*! exports provided: LeftTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTime", function() { return LeftTime; });
class LeftTime {
    constructor(days, hours, minutes) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
    }
}


/***/ }),

/***/ "QrpZ":
/*!****************************************!*\
  !*** ./src/app/shared/models/event.ts ***!
  \****************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
class Event {
    constructor(id, name, dateDebut, beginTime, dateFin, endTime, type, description, lieu, latitude, longitude, createur, emailCreateur, timeLeft, createByOwner) {
        this._id = id;
        this.name = name;
        this.dateDebut = dateDebut;
        this.beginTime = beginTime;
        this.dateFin = dateFin;
        this.endTime = endTime;
        this.type = type;
        this.description = description;
        this.lieu = lieu;
        this.latitude = latitude;
        this.longitude = longitude;
        this.createur = createur;
        this.emailCreateur = emailCreateur;
        this.timeLeft = timeLeft;
        this.createByOwner = createByOwner;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setDateDebut(dateDebut) {
        this.dateDebut = new Date(dateDebut);
    }
    getDateDebut() {
        return this.dateDebut;
    }
    setDateDebutString(dateDebutString) {
        this.dateDebutString = dateDebutString;
    }
    getDateDebutString() {
        return this.dateDebutString;
    }
    setDateFin(dateFin) {
        if (dateFin !== null) {
            this.dateFin = new Date(dateFin);
        }
        else {
            this.dateFin = null;
        }
    }
    getDateFin() {
        return this.dateFin;
    }
    setDateFinString(dateFinString) {
        this.dateFinString = dateFinString;
    }
    getDateFinString() {
        return this.dateFinString;
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    setDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    setLieu(lieu) {
        this.lieu = lieu;
    }
    getLieu() {
        return this.lieu;
    }
    setLatitude(latitude) {
        this.latitude = latitude;
    }
    getLatitude() {
        return this.latitude;
    }
    setLongitude(longitude) {
        this.longitude = longitude;
    }
    getLongitude() {
        return this.longitude;
    }
    setCreateur(createur) {
        this.createur = createur;
    }
    getCreateur() {
        return this.createur;
    }
    setCreateByOwner(create) {
        this.createByOwner = create;
    }
    getCreateByOwner() {
        return this.createByOwner;
    }
    setEmailCreateur(email) {
        this.emailCreateur = email;
    }
    getEmailCreateur() {
        return this.emailCreateur;
    }
    setScope(scope) {
        this.scope = scope;
    }
    getScope() {
        return this.scope;
    }
    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }
    getImageUrl() {
        return this.imageUrl;
    }
    setSpaceAndTime(space_and_time) {
        this.space_and_time = space_and_time;
    }
    getSpaceAndTime() {
        return this.space_and_time;
    }
    setInvites(invites) {
        this.invites = invites;
    }
    getInvites() {
        return this.invites;
    }
    setPricingInfo(pricingInfo) {
        this.pricing_info = pricingInfo;
    }
    getPricingInfo() {
        return this.pricing_info;
    }
    setTimeLeft(timeLeft) {
        this.timeLeft = timeLeft;
    }
    getTimeLeft() {
        return this.timeLeft;
    }
}


/***/ }),

/***/ "Qtnr":
/*!********************************************!*\
  !*** ./src/app/shared/models/date-list.ts ***!
  \********************************************/
/*! exports provided: Dates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dates", function() { return Dates; });
const Dates = [
    "1 jour",
    "2 jours",
    "3 jours",
    "4 jours",
    "5 jours",
    "6 jours",
    "1 semaine",
    "2 semaines",
    "3 semaines",
    "1 mois"
];


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function SignupComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class SignupComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [''],
            name: [''],
            password: [''],
            profile_type: [''],
        });
    }
    submit() {
        this.authService.signup(this.form.value).subscribe((user) => {
            this.router.navigate(['/signin']);
        }, err => {
            this.error = err.error;
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 20, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "my-5", "py-5"], ["fxLayout", "column", "fxLayoutGap", "15px", 3, "formGroup"], ["formControlName", "email", "matInput", "", "type", "text", "placeholder", "email"], ["formControlName", "name", "matInput", "", "type", "text", "placeholder", "nom"], ["formControlName", "profile_type", "name", "profile_type", "fxLayoutGap", "20px", "required", ""], ["value", "public"], ["value", "priv\u00E9"], ["formControlName", "password", "matInput", "", "type", "password", "placeholder", "mot de passe"], [4, "ngIf"], ["color", "primary", "mat-raised-button", "", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "priv\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignupComponent_mat_error_17_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "SVtl":
/*!****************************************************!*\
  !*** ./src/app/shared/services/network.service.ts ***!
  \****************************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NetworkService {
    constructor(http) {
        this.http = http;
        this.asks = new Array();
    }
    getAsks() {
        return this.http.get(`/network/getAks`);
    }
    askFriend(askFriend) {
        this.asks = new Array();
        return this.http.post(`/network/askFriend`, askFriend).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((ask) => {
            this.asks.push(ask);
            return ask;
        }));
    }
    deleteAsk(id) {
        return this.http.delete(`/network/deleteAskFriend`, {
            params: {
                askId: id
            }
        });
    }
    acceptFriend(askId, destinataire, demandeur) {
        return this.http.get(`/network/acceptFriend`, {
            params: {
                askId: askId,
                destinataire: destinataire,
                demandeur: demandeur
            }
        });
    }
    deniedFriend(askId) {
        return this.http.get(`/network/deniedFriend`, {
            params: {
                askId: askId
            }
        });
    }
    deleteFriend(user, ami) {
        return this.http.get(`/network/deleteFriend`, {
            params: {
                user: user,
                ami: ami
            }
        });
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NetworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sv0b":
/*!****************************************************!*\
  !*** ./src/app/shared/services/markers.service.ts ***!
  \****************************************************/
/*! exports provided: MarkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkersService", function() { return MarkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);



class MarkersService {
    constructor() { }
    addBlueMarker(Latitude, Longitude) {
        const marker = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"]([Latitude, Longitude], {
            title: "your position", riseOnHover: true, riseOffset: 2
        }).setIcon(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
        }));
        return marker;
    }
    getRedIcon() {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
            iconSize: [50, 50],
            iconAnchor: [13, 41],
            iconUrl: 'assets/icon-red.png',
        });
    }
    createPoint(mapPoint) {
        const coordinates = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])([
            mapPoint.latitude,
            mapPoint.longitude,
        ]);
        return coordinates;
    }
}
MarkersService.ɵfac = function MarkersService_Factory(t) { return new (t || MarkersService)(); };
MarkersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarkersService, factory: MarkersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_services_meta_and_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/meta-and-title.service */ "vJQl");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(authService, metaAndTitleService) {
        this.authService = authService;
        this.metaAndTitleService = metaAndTitleService;
        this.title = 'EventMap';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_meta_and_title_service__WEBPACK_IMPORTED_MODULE_2__["MetaAndTitleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "body-app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _shared_services_meta_and_title_service__WEBPACK_IMPORTED_MODULE_2__["MetaAndTitleService"] }]; }, null); })();


/***/ }),

/***/ "UvdT":
/*!**************************************!*\
  !*** ./src/app/shared/models/ask.ts ***!
  \**************************************/
/*! exports provided: Ask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
class Ask {
    constructor(id, demandeur, destinataire) {
        this.id = id;
        this.demandeur = demandeur;
        this.destinataire = destinataire;
    }
}


/***/ }),

/***/ "W52M":
/*!*********************************************!*\
  !*** ./src/app/shared/helpers/meta-data.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    '/': {
        title: 'eventMap',
        metas: {
            description: 'Découvrez ce qui se passe autour de vous avec la carte eventMap'
        }
    },
    '/createEvent': {
        title: 'create',
        metas: {
            description: 'Créez un évènement public ou privé '
        }
    },
    '/signin': {
        title: 'login',
        metas: {
            description: 'Page de connexion à un compte eventMap'
        }
    },
    '/signup': {
        title: 'register',
        metas: {
            description: 'Page de création de compte eventMap'
        }
    },
    '/profile': {
        title: 'Mon compte',
        metas: {
            description: 'Page de profil d\'un utilisateur connecté. Elle indique les évènements que vous avez créé et vos amitiés sur le réseau eventMap'
        }
    },
    '/otherProfile': {
        title: 'Compte organisateur',
        metas: {
            description: 'Evènements d\'un organisateur'
        }
    },
    '/eventDetail': {
        title: 'Details',
        metas: {
            description: 'Détails d\'un évènement eventMap. Vous pouvez intéragir avec d\'autres personnes sur un chat si vous êtes connecté'
        }
    },
    '/editPass': {
        title: 'edit password',
        metas: {
            description: 'Page de changement de mot de passe'
        }
    }
});


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _shared_models_ask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/ask */ "UvdT");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/network.service */ "SVtl");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function ProfileComponent_mat_card_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("email : ", ctx_r0.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name : ", ctx_r0.user.name, "");
} }
const _c0 = function (a0) { return { _id: a0 }; };
const _c1 = function (a1) { return ["/eventDetail", a1]; };
function ProfileComponent_mat_card_content_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_card_content_7_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const event_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.popupToDeleteEvent(event_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Supprimer cet \u00E9v\u00E8nement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, event_r4._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, event_r4._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r4.dateDebutString);
} }
const _c2 = function (a0) { return { user: a0 }; };
const _c3 = function (a1) { return ["/otherProfile", a1]; };
function ProfileComponent_mat_card_content_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_card_content_12_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.popupToDeleteFriend(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ami_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ami_r7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ami_r7);
} }
function ProfileComponent_mat_card_content_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_card_content_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.acceptFriend(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Accepter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_card_content_16_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deniedFriend(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Refuser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ask_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ask_r11.demandeur)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ask_r11.demandeur);
} }
const _c4 = function (a0) { return { email: a0 }; };
const _c5 = function (a1) { return ["/editPass", a1]; };
class ProfileComponent {
    constructor(userService, eventService, networkService) {
        this.userService = userService;
        this.eventService = eventService;
        this.networkService = networkService;
        this.events = new Array();
        this.myAsks = new Array();
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
        this.subscription = this.userService.currentUser.subscribe((user) => {
            this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](user._id, user.email, user.name, user.profile_type, user.amis);
        });
        this.eventService.events.subscribe(() => {
            this.events = this.eventService.getEventsByUser(this.user.email);
        });
        this.networkService.getAsks().subscribe((asks) => {
            for (let ask of Object.keys(asks)) {
                if (asks[ask].destinataire === this.user.name) {
                    this.myAsks.push(new _shared_models_ask__WEBPACK_IMPORTED_MODULE_2__["Ask"](asks[ask]._id, asks[ask].demandeur, asks[ask].destinataire));
                }
            }
        });
    }
    acceptFriend(index) {
        this.networkService.acceptFriend(this.myAsks[index].id, this.myAsks[index].destinataire, this.myAsks[index].demandeur).subscribe((res) => {
            this.userService.updateListFriends(this.user, this.myAsks[index].demandeur, "add");
            this.myAsks.splice(this.myAsks.indexOf(res, 1));
        });
    }
    deniedFriend(index) {
        this.networkService.deniedFriend(this.myAsks[index].id).subscribe((res) => {
            this.myAsks.splice(this.myAsks.indexOf(res, 1));
        });
    }
    deleteFriend(index) {
        this.networkService.deleteFriend(this.user.name, this.user.amis[index]).subscribe((res) => {
            this.userService.updateListFriends(this.user, this.user.amis[index]);
        });
    }
    deleteEvent(eventId) {
        this.eventService.deleteEvent(eventId);
    }
    popupToDeleteFriend(index) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Supprimer ' + this.user.amis[index] + ' de vos amis ?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.deleteFriend(index);
            }
        });
    }
    popupToDeleteEvent(eventId) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Supprimer cet évènement ?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.deleteEvent(eventId);
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 17, vars: 9, consts: [["fxLayout", "row", "fxLayout.xs", "column", 1, "profile"], ["fxLayout.xs", "row", "fxLayoutGap.xs", "15px", 1, "p-2", "user"], ["class", "card-compte", "fxLayout", "column", "fxLayoutGap", "15px", 4, "ngIf"], [1, "nav-link", "link-change-pass", 3, "routerLink"], ["mat-raised-button", "", 1, "pass"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "5px", "fxLayoutAlign", "center start"], ["id", "events", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "10"], [1, "p-2"], ["class", "friend", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "15px", 1, "card-compte"], [1, "mail"], ["id", "events"], ["id", "event", 1, "card-body", 3, "routerLink"], [3, "routerLink"], [1, "nopointer"], ["mat-raised-button", "", 3, "click"], ["fxLayout", "row", 1, "friend"], [1, "nav-link", "friend-link", 3, "routerLink"], ["fxFlex", "auto"], [1, "far", "fa-trash-alt", 3, "click"], ["fxLayout", "row"], [1, "nav-link", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_mat_card_content_2_Template, 5, 2, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Changer Mot de Passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_card_content_7_Template, 12, 13, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mes amis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_card_content_12_Template, 5, 6, "mat-card-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mes demandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_card_content_16_Template, 7, 6, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx.user.email)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user.amis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myAsks);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], styles: ["mat-card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.user[_ngcontent-%COMP%]{\n  width:20%;\n  height: 20%;\n}\n\n.profile[_ngcontent-%COMP%]{\n  height: 90vh;\n}\n\n.pass[_ngcontent-%COMP%] {\n  font-size: 10px;\n  width: 95%;\n  padding: 0px;\n  float: none;\n  clear: none;\n  border-style: none;\n  border-width: 1px;\n  border-color: rgba(7, 0, 0, 0.98);\n  border-radius: 20px;\n  box-shadow: inset -2px -2px 5px 0 #000;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  perspective: 824px;\n  transform: perspective(216px);\n  font-weight: 400;\n  background-clip: padding-box;\n  cursor: pointer;\n  background-color: #ededed;\n}\n\n.link-change-pass[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.card-compte[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.card-compte[_ngcontent-%COMP%]    > .mail[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.friend[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.friend-link[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nspan[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n\n.nopointer[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#events[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 140px;\n}\n\n#event[_ngcontent-%COMP%]  {\n  float: none;\n  clear: none;\n  border-style: none;\n  border-width: 1px;\n  border-color: rgba(7, 0, 0, 0.98);\n  border-radius: 20px;\n  box-shadow: inset -2px -2px 5px 0 #000;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  perspective: 824px;\n  transform: perspective(216px);\n  font-weight: 400;\n  background-clip: padding-box;\n  cursor: pointer;\n  background-color: #e5e1e1;\n}\n\n@media only screen and (max-width: 500px) {\n  \n  .user[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 80px;\n  }\n\n  .pass[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n\n  .friend-link[_ngcontent-%COMP%] {\n    padding-left: 60px;\n  }\n\n  .fa-trash-alt[_ngcontent-%COMP%] {\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLGtCQUFrQjtFQUVsQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1QixrQkFBa0I7RUFFbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QjtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2Vye1xuICB3aWR0aDoyMCU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4ucHJvZmlsZXtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4ucGFzcyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMHB4O1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg3LCAwLCAwLCAwLjk4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDVweCAwICMwMDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogODI0cHg7XG4gIHBlcnNwZWN0aXZlOiA4MjRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIxNnB4KTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMTZweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuLmxpbmstY2hhbmdlLXBhc3Mge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jYXJkLWNvbXB0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNhcmQtY29tcHRlID4gLm1haWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZyaWVuZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZnJpZW5kLWxpbmsge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vcG9pbnRlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZhLXRyYXNoLWFsdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2V2ZW50cyB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cblxuI2V2ZW50ICB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDcsIDAsIDAsIDAuOTgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggNXB4IDAgIzAwMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA4MjRweDtcbiAgcGVyc3BlY3RpdmU6IDgyNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjE2cHgpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIxNnB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlMWUxO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAudXNlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgLnBhc3Mge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuXG4gIC5mcmllbmQtbGluayB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG5cbiAgLmZhLXRyYXNoLWFsdCB7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _shared_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] }]; }, null); })();


/***/ }),

/***/ "XNk0":
/*!************************************************!*\
  !*** ./src/app/shared/services/geo.service.ts ***!
  \************************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_geo_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/geo-response.model */ "Ifbd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "dkQB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class GeoService {
    constructor(http) {
        this.http = http;
        this.api_key = '5d8f413175434fb2bc4593e77c84aeef';
    }
    addressLookupFromNominatim(req) {
        let url = `https://${_app_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_NOMINATIM_URL"]}?text=${req}&apiKey=201b5061580e488ead945c5658496306`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.map((item) => new _models_geo_response_model__WEBPACK_IMPORTED_MODULE_1__["GeoResponse"](item.lat, item.lon, item.display_name))));
    }
    getLocationFromGeoapify(req) {
        req.replace(' ', '%20');
        const url = 
        // "https://cors-anywhere.herokuapp.com/" +
        "https://api.geoapify.com/v1/geocode/autocomplete";
        return this.http.get(url, {
            params: {
                text: req,
                apiKey: this.api_key
            }
        });
    }
}
GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoService, factory: GeoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XQ/Y":
/*!*********************************************!*\
  !*** ./src/app/shared/models/event-list.ts ***!
  \*********************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
const Events = [
    'Teuf d\'appart',
    'Soirée',
    'Anniversaire',
    'Concert',
    'Sport',
    'Festival musical',
    'Festival sportif',
    'Spectacle',
    'Exposition',
    'Salon',
    'Divers'
];


/***/ }),

/***/ "Y7mD":
/*!***********************************************!*\
  !*** ./src/app/shared/models/message-chat.ts ***!
  \***********************************************/
/*! exports provided: MessageChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChat", function() { return MessageChat; });
class MessageChat {
    constructor(_id, message, type, userId, userName, eventId, createdAt) {
        this._id = _id;
        this.message = message;
        this.type = type;
        this.userId = userId;
        this.userName = userName;
        this.eventId = eventId;
        this.createdAt = createdAt;
    }
    setMessage(message, userId, userName, eventId) {
        this.message = message;
        this.userId = userId;
        this.userName = userName;
        this.eventId = eventId;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list/event-list.component */ "JESc");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-form/event-form.component */ "moix");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/event.component */ "p/l/");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "JGpI");
/* harmony import */ var _other_profile_other_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other-profile/other-profile.component */ "JCQt");
/* harmony import */ var _auth_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/edit-password/edit-password.component */ "JuYP");
/* harmony import */ var _event_chat_event_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-chat/event-chat.component */ "o9Tl");
/* harmony import */ var _material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material/angular-material.module */ "ffhm");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/chat.service */ "xgtH");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/events-api.service */ "0nKt");
/* harmony import */ var _shared_services_geo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/geo.service */ "XNk0");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/interceptors/auth.interceptor */ "H06L");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
//Composants














//Material


//Services






//gard & interceptor http requests


//Modules








//Date française


//Carte leaflet


Object(_angular_common__WEBPACK_IMPORTED_MODULE_32__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_33___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
            //multi à true pour préciser qu'il y a d'autres elements à provide ensuite
            multi: true
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_28__["LOCALE_ID"], useValue: 'fr-FR' },
        _shared_services_geo_service__WEBPACK_IMPORTED_MODULE_20__["GeoService"],
        _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
        _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
        _shared_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
        _shared_services_event_service__WEBPACK_IMPORTED_MODULE_18__["EventService"],
        _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_19__["EventsApiService"],
        _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_17__["ChatService"],
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"]('896161427840233')
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_34__["LeafletModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["SocialLoginModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
        _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"],
        _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_3__["EventFormComponent"],
        _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _event_event_component__WEBPACK_IMPORTED_MODULE_8__["EventComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
        _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["EventDetailComponent"],
        _other_profile_other_profile_component__WEBPACK_IMPORTED_MODULE_11__["OtherProfileComponent"],
        _auth_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_12__["EditPasswordComponent"],
        _event_chat_event_chat_component__WEBPACK_IMPORTED_MODULE_13__["EventChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_34__["LeafletModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        _material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"],
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_28__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
                    _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"],
                    _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_3__["EventFormComponent"],
                    _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                    _event_event_component__WEBPACK_IMPORTED_MODULE_8__["EventComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                    _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["EventDetailComponent"],
                    _other_profile_other_profile_component__WEBPACK_IMPORTED_MODULE_11__["OtherProfileComponent"],
                    _auth_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_12__["EditPasswordComponent"],
                    _event_chat_event_chat_component__WEBPACK_IMPORTED_MODULE_13__["EventChatComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
                    _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_34__["LeafletModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["SocialLoginModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                        //multi à true pour préciser qu'il y a d'autres elements à provide ensuite
                        multi: true
                    },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_28__["LOCALE_ID"], useValue: 'fr-FR' },
                    _shared_services_geo_service__WEBPACK_IMPORTED_MODULE_20__["GeoService"],
                    _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                    _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                    _shared_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                    _shared_services_event_service__WEBPACK_IMPORTED_MODULE_18__["EventService"],
                    _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_19__["EventsApiService"],
                    _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_17__["ChatService"],
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"]('896161427840233')
                                }
                            ]
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_models_map_point_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/map-point.model */ "1brn");
/* harmony import */ var _shared_models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/event */ "QrpZ");
/* harmony import */ var _shared_services_markers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/markers.service */ "Sv0b");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/events-api.service */ "0nKt");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");












function MapComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leafletMapReady", function MapComponent_div_1_Template_div_leafletMapReady_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onMapReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leafletOptions", ctx_r0.mapOptions);
} }
class MapComponent {
    constructor(markerService, eventService, zone, apiService) {
        this.markerService = markerService;
        this.eventService = eventService;
        this.zone = zone;
        this.apiService = apiService;
        this.displayMap = false;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapPoint = new _shared_models_map_point_model__WEBPACK_IMPORTED_MODULE_2__["MapPoint"]();
        this.eventToDisplay = new _shared_models_event__WEBPACK_IMPORTED_MODULE_3__["Event"]();
        this.layers = new Array();
    }
    ngOnInit() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.currentLatitude = position.coords.latitude;
            this.currentLongitude = position.coords.longitude;
            this.initializeMap();
        });
        this.eventService.getEventFromTopBar().subscribe((event) => {
            this.getZoomOnEvent(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](event.latitude, event.longitude));
        });
    }
    callOpenData() {
        this.apiService.callOpenData();
    }
    initializeMap() {
        this.mapOptions = {
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(this.currentLatitude, this.currentLongitude),
            zoom: 15,
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: 'Map data © OpenStreetMap contributors',
                }),
            ],
        };
        this.displayMap = true;
    }
    onMapReady(map) {
        this.map = map.on('moveend', () => {
            this.bounds = map.getBounds();
            this.eventService.setBounds(this.bounds);
        });
        this.bounds = map.getBounds();
        this.eventService.setBounds(this.bounds);
        const marker = this.markerService.addBlueMarker(this.currentLatitude, this.currentLongitude);
        marker.addTo(this.map).bindTooltip("votre position");
    }
    ngOnChanges(changes) {
        const ptZoom = changes.inputEventToZoom;
        if (typeof ptZoom !== 'undefined') {
            if (typeof ptZoom.currentValue !== 'undefined') {
                const markerZoom = this.markerService.createPoint({
                    latitude: ptZoom.currentValue.latitude,
                    longitude: ptZoom.currentValue.longitude,
                    address: ptZoom.currentValue.address
                });
                this.getZoomOnEvent(markerZoom);
            }
        }
    }
    ngDoCheck() {
        if (this.displayMap && this.map) {
            if (this.inputFiltersType !== null && this.inputFiltersType.length >= 1) {
                for (let layer of this.layers) {
                    this.clearMap(layer);
                }
                for (let event of this.inputEvents) {
                    if (this.inputFiltersType.indexOf(event.type) !== -1) {
                        this.newPoint(event.latitude, event.longitude, event.lieu);
                        this.createMarker(event);
                    }
                }
            }
            else if (this.inputFiltersDate !== null && this.inputFiltersDate.length >= 1) {
                for (let layer of this.layers) {
                    this.clearMap(layer);
                }
                for (let event of this.inputEvents) {
                    if (this.inputFiltersDate.indexOf("1 jour") !== -1) {
                        if (event.timeLeft.days <= 1) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("2 jours") !== -1) {
                        if (event.timeLeft.days <= 2) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("3 jours") !== -1) {
                        if (event.timeLeft.days <= 3) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("4 jours") !== -1) {
                        if (event.timeLeft.days <= 4) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("5 jours") !== -1) {
                        if (event.timeLeft.days <= 5) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("6 jours") !== -1) {
                        if (event.timeLeft.days <= 6) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("1 semaine") !== -1) {
                        if (event.timeLeft.days <= 7) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("2 semaines") !== -1) {
                        if (event.timeLeft.days <= 14) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("3 semaines") !== -1) {
                        if (event.timeLeft.days <= 21) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                    if (this.inputFiltersDate.indexOf("1 mois") !== -1) {
                        if (event.timeLeft.days <= 28) {
                            this.newPoint(event.latitude, event.longitude, event.lieu);
                            this.createMarker(event);
                        }
                    }
                }
            }
            else {
                for (let layer of this.layers) {
                    this.clearMap(layer);
                }
                for (let event of this.inputEvents) {
                    this.newPoint(event.latitude, event.longitude, event.lieu);
                    this.createMarker(event);
                }
            }
        }
    }
    newPoint(latitude, longitude, address) {
        this.mapPoint = {
            latitude: latitude,
            longitude: longitude,
            address: address ? address : this.mapPoint.address,
        };
    }
    createMarker(e) {
        const point = this.markerService.createPoint(this.mapPoint);
        let time = e.timeLeft.days + "j " + e.timeLeft.hours + "h " + e.timeLeft.minutes + "min";
        const layer = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(point).setIcon(this.getRedIcon())
            .addTo(this.map)
            .on('click', () => {
            this.zone.run(() => {
                this.outputEvent.emit(e);
                this.getZoomOnEvent(point);
            });
        })
            .bindTooltip(time);
        this.layers.push(layer);
    }
    getZoomOnEvent(point) {
        this.map.flyTo(point, this.map.getZoom());
    }
    getRedIcon() {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
            iconSize: [50, 50],
            iconAnchor: [13, 41],
            iconUrl: 'assets/icon-red.png',
        });
    }
    backToPosition() {
        const currentPos = this.markerService.createPoint({
            latitude: this.currentLatitude,
            longitude: this.currentLongitude,
            address: '',
        });
        this.map.flyTo(currentPos, this.map.getZoom());
    }
    clearMap(layer) {
        if (this.map.hasLayer(this.layers[this.layers.indexOf(layer)])) {
            this.map.removeLayer(this.layers[this.layers.indexOf(layer)]);
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_markers_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_6__["EventsApiService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { inputFiltersType: "inputFiltersType", inputFiltersDate: "inputFiltersDate", inputEventToZoom: "inputEventToZoom", inputEvents: "inputEvents" }, outputs: { outputEvent: "outputEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_2_listener() { return ctx.backToPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Revenir \u00E0 ma position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMap);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__["LeafletDirective"]], styles: ["#map[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 500px;\n  border: 2px solid #929395;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 500px) {\n  \n  #map[_ngcontent-%COMP%] {\n    height: 250px;\n    width: 250px;\n    border: 2px solid #929395;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyOTM5NTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAjbWFwIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTI5Mzk1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css'],
            }]
    }], function () { return [{ type: _shared_services_markers_service__WEBPACK_IMPORTED_MODULE_4__["MarkersService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_6__["EventsApiService"] }]; }, { inputFiltersType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputFiltersDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEventToZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "dkQB":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: BASE_NOMINATIM_URL, DEFAULT_VIEW_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_NOMINATIM_URL", function() { return BASE_NOMINATIM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_BOX", function() { return DEFAULT_VIEW_BOX; });
const BASE_NOMINATIM_URL = 'api.geoapify.com/v1/geocode/autocomplete';
const DEFAULT_VIEW_BOX = 'viewbox=-25.0000%2C70.0000%2C50.0000%2C40.0000';


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function HeaderComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_option_7_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectEvent(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r8, " ");
} }
function HeaderComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mon compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deconnexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.displayList("notconnected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.displayList("notconnected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.displayList("notconnected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.displayList("notconnected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.displayList("connected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.displayList("connected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.displayList("connected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mon compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.logout("connected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deconnexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router, eventService, userService) {
        this.authService = authService;
        this.router = router;
        this.eventService = eventService;
        this.userService = userService;
        this.notConnected = false;
        this.connected = false;
        this.events = new Array();
    }
    ngOnInit() {
        this.subscription = this.authService.jwtToken.subscribe((jwtToken) => {
            this.jwtToken = jwtToken;
        });
        this.eventService.events.subscribe((events) => {
            this.events = events;
        });
    }
    search() {
        this.results = new Array();
        for (let event of this.events) {
            const name = event.name.toUpperCase();
            if (name.startsWith(this.eventSearch.toUpperCase())) {
                this.results.push(event.name);
            }
        }
        if (this.eventSearch.length === 0) {
            this.results = new Array();
        }
    }
    selectEvent(index) {
        let e;
        for (let event of this.events) {
            if (event.name === this.results[index]) {
                e = event;
            }
        }
        const url = this.router.url;
        if (url.length !== 1) {
            this.router.navigate(['/eventDetail', { _id: e._id }]);
        }
        else {
            this.eventService.setEventFromTopBar(e);
        }
    }
    logout(mode) {
        this.authService.logout();
        this.userService.currentUser.next(null);
        localStorage.removeItem('currentUser');
        if (mode) {
            this.displayList(mode);
        }
    }
    displayList(mode) {
        if (mode === "notconnected") {
            this.notConnected = !this.notConnected;
        }
        else {
            this.connected = !this.connected;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 9, consts: [["fxLayout", "row", "fxLayoutGap", "15px"], ["src", "../../assets/logo_eventMap.png", "alt", "logo", "routerLink", "/"], ["mat-raised-button", "", "routerLink", "/createEvent", 1, "link"], ["placeholder", "Chercher un event", "type", "text", "id", "search", 1, "form-control", 3, "ngModel", "matAutocomplete", "ngModelChange", "keyup"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "auto"], ["fxLayout", "row", 1, "bar-right"], ["fxLayoutGap", "15px", 4, "ngIf"], ["fxFlex", "1"], ["class", "phone fas fa-bars fa-2x", 3, "click", 4, "ngIf"], ["class", "select-bars", "fxLayout", "column", 4, "ngIf"], [3, "value", "click"], ["fxLayoutGap", "15px"], ["mat-raised-button", "", "routerLink", "/signin", 1, "link"], ["mat-raised-button", "", "routerLink", "/signup", 1, "link"], ["mat-raised-button", "", "routerLink", "/profile", 1, "link"], ["mat-raised-button", "", 1, "link", 3, "click"], [1, "phone", "fas", "fa-bars", "fa-2x", 3, "click"], ["fxLayout", "column", 1, "select-bars"], [1, "fas", "fa-times", "fa-2x", 3, "click"], ["mat-raised-button", "", "routerLink", "/signin", 1, "link", 3, "click"], ["mat-raised-button", "", "routerLink", "/signup", 1, "link", 3, "click"], ["mat-raised-button", "", "routerLink", "/profile", 1, "link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cr\u00E9er un \u00E9v\u00E8nement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_4_listener($event) { return ctx.eventSearch = $event; })("keyup", function HeaderComponent_Template_input_keyup_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_span_10_Template, 5, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_span_11_Template, 5, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_16_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventSearch)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jwtToken.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtToken.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jwtToken.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtToken.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".link[_ngcontent-%COMP%] {\n  outline: 0;\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%]{\n  margin-left: 10px !important;\n  padding-left: 20px !important;\n  width: 150px;\n  font-size: 12px;\n}\nmat-toolbar[_ngcontent-%COMP%]{\n  font-size: 12px;\n  background-color: #d5f7f1;\n  height: 20%;\n}\nimg[_ngcontent-%COMP%]{\n  margin-right: 0px !important;\n  width: 10%;\n  height: 7%;\n}\n.phone[_ngcontent-%COMP%], .select-bars[_ngcontent-%COMP%]{\n  display: none;\n}\nmat-toolbar[_ngcontent-%COMP%], #search[_ngcontent-%COMP%]{\n  padding: 0;\n}\na[_ngcontent-%COMP%]{\n  color: #4f4a4a;\n  line-height: 1.5;\n  font-size: 400;\n  margin: 2px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #54d9e3;\n  margin-left: 10px !important;\n}\n@media only screen and (max-width: 500px) {\n  \n  .bar-right[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .select-bars[_ngcontent-%COMP%]{\n    display: block;\n    padding: 10px;\n    position: absolute;\n    background: rgba(220, 242, 234, 0.988);\n    height: 160px;\n    width: 150px;\n    top: 5px;\n    right: 15px;\n    z-index:999;\n    border: solid 1px rgba(172, 198, 188, 0.988);\n    border-radius: 5px;\n  }\n\n  .fa-times[_ngcontent-%COMP%] {\n    padding-bottom: 15px;\n    position: relative;\n    left: 85%;\n  }\n\n  .fa-bars[_ngcontent-%COMP%]{\n    padding-right: 20px;\n    color: rgba(45, 91, 74, 0.988);\n  }\n\n  .mat-toolbar[_ngcontent-%COMP%]{\n    height: 10vh;\n    padding: 16px;\n  }\n\n  img[_ngcontent-%COMP%]{\n    content: url('favicon.ico');\n    margin-right: 5px !important;\n    width: 55px;\n    height: 40px;\n  }\n\n  #search[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n    padding: 12px;\n  }\n\n  input[_ngcontent-%COMP%]{\n    width: 125px;\n    font-size: 12px;\n    padding-left: 10px !important;\n  }\n\n  mat-toolbar[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    background-color: #54d9e3;\n    text-indent: -9999px;\n    height: 30px;\n    line-height: 0;\n    padding: 0px;\n  }\n\n  mat-toolbar[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]::after{\n    padding: 0px;\n    content: \"Cr\u00E9er\";\n    text-indent: 0;\n    display: block;\n    line-height: initial;\n  }\n\n  div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsMkJBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlucHV0e1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5tYXQtdG9vbGJhcntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVmN2YxO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuaW1ne1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDclO1xufVxuXG4ucGhvbmUsIC5zZWxlY3QtYmFyc3tcbiAgZGlzcGxheTogbm9uZTtcbn1cblxubWF0LXRvb2xiYXIsICNzZWFyY2h7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmF7XG4gIGNvbG9yOiAjNGY0YTRhO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDQwMDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NGQ5ZTM7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gIC5iYXItcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG9uZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VsZWN0LWJhcnN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDI0MiwgMjM0LCAwLjk4OCk7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgei1pbmRleDo5OTk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNzIsIDE5OCwgMTg4LCAwLjk4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgLmZhLXRpbWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogODUlO1xuICB9XG5cbiAgLmZhLWJhcnN7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBjb2xvcjogcmdiYSg0NSwgOTEsIDc0LCAwLjk4OCk7XG4gIH1cblxuICAubWF0LXRvb2xiYXJ7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICBpbWd7XG4gICAgY29udGVudDogdXJsKC4uLy4uL2Zhdmljb24uaWNvKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICNzZWFyY2gge1xuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIGlucHV0e1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBtYXQtdG9vbGJhciA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0ZDllMztcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgbWF0LXRvb2xiYXIgPiBidXR0b246OmFmdGVye1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjb250ZW50OiBcIkNyw6llclwiO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICB9XG5cbiAgZGl2ID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "ffhm":
/*!*****************************************************!*\
  !*** ./src/app/material/angular-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




































const materialModules = [
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...materialModules
        ], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]], exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    ...materialModules
                ],
                providers: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
                ],
                exports: [
                    ...materialModules
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "KJJU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(http) {
        this.http = http;
        this.subscription = this.getCurrentUser();
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]());
    }
    getCurrentUser() {
        return this.http.get('/api/auth/current').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            this.currentUser.next(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.currentUser;
        })).subscribe(() => {
            this.subscription.unsubscribe();
        });
    }
    setCurrentUser() {
        this.http.get('/api/auth/current').subscribe((user) => {
            this.currentUser.next(user);
        });
    }
    getUser(user) {
        return this.http.get(`/api/auth/user`, {
            params: {
                user: user
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            return user;
        }));
    }
    updateListFriends(currentUser, friend, type) {
        if (type === "add") {
            currentUser.amis.push(friend);
        }
        else {
            currentUser.amis.splice(currentUser.amis.indexOf(friend), 1);
        }
        this.currentUser.next(currentUser);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "moix":
/*!****************************************************!*\
  !*** ./src/app/event-form/event-form.component.ts ***!
  \****************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_geo_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/geo-response.model */ "Ifbd");
/* harmony import */ var _shared_models_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/event-list */ "XQ/Y");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _shared_models_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/event */ "QrpZ");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_markers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/markers.service */ "Sv0b");
/* harmony import */ var _shared_services_geo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/geo.service */ "XNk0");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/network.service */ "SVtl");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");




























const _c0 = ["fileInput1"];
const _c1 = ["fileInput2"];
const _c2 = ["fileInput3"];
function EventFormComponent_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", event_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r18);
} }
function EventFormComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vous devez s\u00E9lectionner un type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventFormComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ami_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ami_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ami_r20);
} }
function EventFormComponent_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invitations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventFormComponent_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.invitations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.createur.amis);
} }
function EventFormComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vous devez choisir la date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventFormComponent_div_39_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.errorCreator);
} }
function EventFormComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ce n'est pas vous qui organisez ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_div_39_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.newEvent.createur = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email de l'organisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_div_39_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.newEvent.emailCreateur = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventFormComponent_div_39_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.newEvent.createur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.newEvent.emailCreateur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.errorCreator);
} }
function EventFormComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventFormComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.errorPlace);
} }
function EventFormComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leafletMapReady", function EventFormComponent_div_48_Template_div_leafletMapReady_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onMapReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leafletOptions", ctx_r12.mapOptions);
} }
function EventFormComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_mat_option_51_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.selectAdress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", result_r27)("value", result_r27.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r27.address, " ");
} }
class EventFormComponent {
    constructor(markerService, geoService, eventService, networkService, userService, activatedRoute, router) {
        this.markerService = markerService;
        this.geoService = geoService;
        this.eventService = eventService;
        this.networkService = networkService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.events = _shared_models_event_list__WEBPACK_IMPORTED_MODULE_2__["Events"];
        this.displayMap = false;
        this.changePlace = false;
        this.serverImg = "/upload?img=";
        this.searchResults = [];
        this.createur = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.invitations = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.newEvent = new _shared_models_event__WEBPACK_IMPORTED_MODULE_4__["Event"]();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.id = params.get('_id');
        });
        this.subscription = this.userService.currentUser.subscribe((user) => {
            this.createur.setName(user.name);
            this.createur.setEmail(user.email);
            this.createur.setAmis(user.amis);
        });
        if (this.id) {
            this.eventService.events.subscribe((events) => {
                this.newEvent = events.find((event) => this.id === event._id);
                this.newEvent.setDateDebut(new Date(this.newEvent.dateDebut));
            });
        }
    }
    ngDoCheck() {
        if (this.newEvent && this.newEvent.lieu && this.newEvent.lieu.length > 0 && this.changePlace) {
            this.changePlace = false;
            for (let result of this.searchResults) {
                if (result.address === this.newEvent.lieu) {
                    this.newEvent.setLatitude(result.latitude);
                    this.newEvent.setLongitude(result.longitude);
                    if (!this.mapOptions) {
                        this.initializeMap();
                    }
                    else {
                        this.updateMap();
                    }
                }
            }
            ;
        }
    }
    openFile1() {
        this.inputRef1.nativeElement.click();
    }
    openFile2() {
        this.inputRef2.nativeElement.click();
    }
    openFile3() {
        this.inputRef3.nativeElement.click();
    }
    selectAdress() {
        this.changePlace = true;
    }
    onImage1Change(event) {
        if (typeof this.newEvent.formData === 'undefined') {
            this.newEvent.formData = new FormData();
        }
        if (event.target.files[0]) {
            this.newEvent.formData.append('image1', event.target.files[0], event.target.files[0].name);
        }
    }
    onImage2Change(event) {
        if (typeof this.newEvent.formData === 'undefined') {
            this.newEvent.formData = new FormData();
        }
        if (event.target.files[0]) {
            this.newEvent.formData.append('image2', event.target.files[0], event.target.files[0].name);
        }
    }
    onImage3Change(event) {
        if (typeof this.newEvent.formData === 'undefined') {
            this.newEvent.formData = new FormData();
        }
        if (event.target.files[0]) {
            this.newEvent.formData.append('image3', event.target.files[0], event.target.files[0].name);
        }
    }
    createEvent() {
        if (typeof this.newEvent.latitude === 'undefined') {
            this.errorPlace = "Vous devez sélectionner une adresse parmis celles proposées en fonction de votre recherche";
            return;
        }
        if (this.id) {
            this.whichCreator();
            this.makeDate();
            this.checkScope();
            this.eventService.editEvent(this.newEvent, this.newEvent.formData);
            this.router.navigate(['/']);
        }
        else {
            this.whichCreator();
            this.makeDate();
            this.checkScope();
            this.eventService.createEvent(this.newEvent, this.newEvent.formData);
            this.router.navigate(['/']);
        }
    }
    checkScope() {
        if (this.scope === "privé") {
            this.newEvent.setScope("privé");
            this.newEvent.setInvites(this.invitations.value);
        }
        else {
            this.newEvent.setScope("public");
        }
    }
    makeDate() {
        let dateform = new Date(this.newEvent.dateDebut);
        if (this.newEvent.beginTime) {
            dateform.setHours(Number(this.newEvent.beginTime.substring(0, 2)));
            dateform.setMinutes(Number(this.newEvent.beginTime.substring(3, 5)));
        }
        this.newEvent.setDateDebut(dateform);
        if (this.newEvent.dateFin) {
            dateform = new Date(this.newEvent.dateFin);
            if (this.newEvent.endTime) {
                dateform.setHours(Number(this.newEvent.endTime.substring(0, 2)));
                dateform.setMinutes(Number(this.newEvent.endTime.substring(3, 5)));
            }
            this.newEvent.setDateFin(dateform);
        }
    }
    whichCreator() {
        if (!this.createur.name) {
            this.errorCreator = "Vous n'êtes pas connecté en tant qu'utilisateur connu, vous devez donc spécifier un organisateur pour cet évènement ou vous connecter";
            return;
        }
        if (!this.newEvent.createur && !this.newEvent.emailCreateur) {
            this.newEvent.setCreateur(this.createur.name);
            this.newEvent.setEmailCreateur(this.createur.email);
            this.newEvent.setCreateByOwner(true);
        }
        else {
            this.newEvent.setCreateByOwner(false);
        }
    }
    addresseFromGeoApi() {
        this.geoService.getLocationFromGeoapify(this.newEvent.lieu).subscribe((results) => {
            this.searchResults = new Array();
            for (let feature of results.features) {
                const result = new _shared_models_geo_response_model__WEBPACK_IMPORTED_MODULE_1__["GeoResponse"](feature.properties.lat, feature.properties.lon, feature.properties.formatted);
                this.searchResults.push(result);
            }
        });
    }
    initializeMap() {
        this.mapOptions = {
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLng"])(this.newEvent.latitude, this.newEvent.longitude),
            zoom: 15,
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: 'Map data © OpenStreetMap contributors',
                }),
            ],
        };
        this.displayMap = true;
    }
    onMapReady(map) {
        this.map = map;
        this.newPoint(this.newEvent.latitude, this.newEvent.longitude);
        const point = this.markerService.createPoint(this.mapPoint);
        this.lastLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"])(point).setIcon(this.markerService.getRedIcon()).addTo(this.map);
    }
    updateMap() {
        if (this.map && this.map.hasLayer(this.lastLayer)) {
            this.map.removeLayer(this.lastLayer);
            this.newPoint(this.newEvent.latitude, this.newEvent.longitude);
            this.createMarker();
        }
    }
    newPoint(latitude, longitude, address) {
        this.mapPoint = {
            latitude: latitude,
            longitude: longitude,
            address: ""
        };
    }
    createMarker() {
        const point = this.markerService.createPoint(this.mapPoint);
        this.lastLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"])(point).setIcon(this.markerService.getRedIcon())
            .addTo(this.map).on('click', (event) => {
            console.log(event);
        });
        this.map.flyTo(point, this.map.getZoom());
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
EventFormComponent.ɵfac = function EventFormComponent_Factory(t) { return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_markers_service__WEBPACK_IMPORTED_MODULE_7__["MarkersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventFormComponent, selectors: [["app-event-form"]], viewQuery: function EventFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef3 = _t.first);
    } }, decls: 69, vars: 29, consts: [[2, "text-align", "center"], ["enctype", "multipart/form-data", 3, "ngSubmit"], ["myForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "center start", "fxLayoutGap", "10%"], ["fxLayout", "column", "fxFlex", "10", "fxLayoutGap", "20px"], ["name", "type", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-msg", 4, "ngIf"], ["fxFlex", "auto"], ["name", "scope", 3, "ngModel", "ngModelChange"], ["for", "scope"], ["value", "public"], ["value", "priv\u00E9"], ["appearance", "fill", 4, "ngIf"], ["fxLayout", "row no wrap", "fxLayoutGap", "10%"], ["fxLayout", "column nowrap", "fxLayoutGap", "2px"], ["matInput", "", "name", "dateDebut", "id", "dateDebut", "placeholder", "Date de d\u00E9but", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["format", "DD-MM-YYYY"], ["pickerDebut", ""], ["matInput", "", "placeholder", "heure de d\u00E9but", "name", "beginTime", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], [3, "minutesGap"], ["beginTime", ""], ["matInput", "", "name", "dateFin", "id", "dateFin", "placeholder", "Date de fin", 3, "ngModel", "matDatepicker", "ngModelChange"], ["pickerFin", ""], ["matInput", "", "placeholder", "heure de fin", "name", "endTime", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["endTime", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column nowrap", 2, "width", "500px"], ["matInput", "", "name", "name", "id", "name", "placeholder", "Nom de l'\u00E9v\u00E8nement", "required", "", 3, "ngModel", "ngModelChange"], ["fxLayout", "column", "fxLayoutGap", "5px"], ["type", "text", "matInput", "", "name", "lieu", "id", "lieu", "placeholder", "Entrez une adresse", 1, "form-control", 3, "ngModel", "matAutocomplete", "ngModelChange", "keyup"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady", 4, "ngIf"], ["auto", "matAutocomplete"], [3, "displayWith", "value", "click", 4, "ngFor", "ngForOf"], ["type", "text", "rows", "4", "matInput", "", "name", "description", "id", "description", "placeholder", "Description de l'\u00E9v\u00E8nement", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutGap", "50px"], [1, "fa", "fa-cloud-upload", "fa-2x", 3, "click"], ["type", "file", "fxHide", "true", "name", "image1", "id", "image1", 3, "change"], ["fileInput1", ""], ["type", "file", "fxHide", "true", "name", "image2", "id", "image2", 3, "change"], ["fileInput2", ""], ["type", "file", "fxHide", "true", "name", "image3", "id", "image3", 3, "change"], ["fileInput3", ""], ["fxLayoutAlign", "center center"], ["id", "submit", "color", "primary", "type", "submit", "mat-raised-button", ""], [3, "value"], [1, "error-msg"], ["appearance", "fill"], ["multiple", "", 3, "formControl"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["for", "newEvent.createur"], ["matInput", "", "name", "organisateur", "placeholder", "Organisateur", 3, "ngModel", "ngModelChange"], ["for", "newEvent.emailCreateur"], ["matInput", "", "name", "organisateur", "placeholder", "email", 3, "ngModel", "ngModelChange"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady"], [3, "displayWith", "value", "click"]], template: function EventFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D\u00E9tails de l'\u00E9v\u00E8nement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EventFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.valid && ctx.createEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_mat_radio_group_ngModelChange_6_listener($event) { return ctx.newEvent.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventFormComponent_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventFormComponent_span_8_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_mat_radio_group_ngModelChange_10_listener($event) { return ctx.scope = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " L'\u00E9v\u00E8nement est plublic par d\u00E9faut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "priv\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EventFormComponent_mat_form_field_17_Template, 5, 2, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.newEvent.dateDebut = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EventFormComponent_span_25_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newEvent.beginTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ngx-material-timepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_31_listener($event) { return ctx.newEvent.dateFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_36_listener($event) { return ctx.newEvent.endTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-material-timepicker", 21, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EventFormComponent_div_39_Template, 10, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_42_listener($event) { return ctx.newEvent.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EventFormComponent_span_43_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_46_listener($event) { return ctx.newEvent.lieu = $event; })("keyup", function EventFormComponent_Template_input_keyup_46_listener() { return ctx.addresseFromGeoApi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EventFormComponent_span_47_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EventFormComponent_div_48_Template, 1, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-autocomplete", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EventFormComponent_mat_option_51_Template, 2, 3, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_textarea_ngModelChange_53_listener($event) { return ctx.newEvent.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Vous pouvez charger 3 images pour d\u00E9crire votre \u00E9v\u00E8nement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_Template_div_click_57_listener() { return ctx.openFile1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventFormComponent_Template_input_change_58_listener($event) { return ctx.onImage1Change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_Template_div_click_60_listener() { return ctx.openFile2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventFormComponent_Template_input_change_61_listener($event) { return ctx.onImage2Change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_Template_div_click_63_listener() { return ctx.openFile3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventFormComponent_Template_input_change_64_listener($event) { return ctx.onImage3Change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cr\u00E9er/Modifier l'\u00E9v\u00E8nement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.type == null ? null : _r0.controls.type.errors == null ? null : _r0.controls.type.errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scope === "priv\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.dateDebut)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.dateDebut == null ? null : _r0.controls.dateDebut.errors == null ? null : _r0.controls.dateDebut.errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r6)("format", 24)("ngModel", ctx.newEvent.beginTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.dateFin)("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r8)("format", 24)("ngModel", ctx.newEvent.endTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newEvent.createByOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.name == null ? null : _r0.controls.name.errors == null ? null : _r0.controls.name.errors.required) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.lieu)("matAutocomplete", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEvent.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepicker"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_19__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_19__["NgxMaterialTimepickerComponent"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocomplete"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_25__["LeafletDirective"]], styles: ["form[_ngcontent-%COMP%]{\n  height: 90vh;\n}\n\nspan[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nspan.error-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-wrapper .mat-form-field-underline{\n  display: none;\n}\n\n.fa[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJldmVudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbnNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNwYW4uZXJyb3ItbXNnIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-form',
                templateUrl: './event-form.component.html',
                styleUrls: ['./event-form.component.css']
            }]
    }], function () { return [{ type: _shared_services_markers_service__WEBPACK_IMPORTED_MODULE_7__["MarkersService"] }, { type: _shared_services_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] }, { type: _shared_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] }, { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }]; }, { inputRef1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput1', { static: true }]
        }], inputRef2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput2', { static: true }]
        }], inputRef3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput3', { static: true }]
        }] }); })();


/***/ }),

/***/ "o9Tl":
/*!****************************************************!*\
  !*** ./src/app/event-chat/event-chat.component.ts ***!
  \****************************************************/
/*! exports provided: EventChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventChatComponent", function() { return EventChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_message_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/message-chat */ "Y7mD");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/chat.service */ "xgtH");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = ["input"];
function EventChatComponent_li_2_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventChatComponent_li_2_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteMessage(message_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventChatComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventChatComponent_li_2_span_8_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser._id === message_r3.userId);
} }
function EventChatComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorOnPublish);
} }
class EventChatComponent {
    constructor(userService, chatService) {
        this.userService = userService;
        this.chatService = chatService;
        this.messages = new Array();
    }
    ngOnInit() {
        this.subscription = this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
        this.chatService.getMessages(this.event._id).subscribe((messages) => {
            for (let message of messages) {
                const m = new _shared_models_message_chat__WEBPACK_IMPORTED_MODULE_1__["MessageChat"](message._id, message.message, message.type, message.userId, message.userName, message.eventId, new Date(message.createdAt).toLocaleDateString() + " - " + new Date(message.createdAt).toLocaleTimeString());
                this.messages.push(m);
            }
        });
    }
    submitMessage() {
        if (this.currentUser._id) {
            if (this.message && this.message !== "") {
                const message = new _shared_models_message_chat__WEBPACK_IMPORTED_MODULE_1__["MessageChat"]();
                message.setMessage(this.message, this.currentUser._id, this.currentUser.name, this.event._id);
                this.chatService.saveMessage(message).subscribe((message) => {
                    this.messages.push(message);
                });
                this.input.nativeElement.focus();
                this.message = "";
            }
        }
        else {
            this.errorOnPublish = "Vous devez être connecté avec un compte pour publier";
        }
    }
    deleteMessage(id) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Supprimer votre commentaire ?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.chatService.deleteEvent(id).subscribe(() => {
                    const index = this.messages.findIndex((message) => message._id === id);
                    this.messages.splice(index, 1);
                });
            }
        });
    }
    enter(event) {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            this.submitMessage();
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
EventChatComponent.ɵfac = function EventChatComponent_Factory(t) { return new (t || EventChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"])); };
EventChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventChatComponent, selectors: [["app-event-chat"]], viewQuery: function EventChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { event: "event" }, decls: 9, vars: 3, consts: [["fxLayout", "column"], ["fxFlex", "60vh", "fxFlex.xs", "35vh", 1, "list-messages"], ["fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "submit"], ["type", "text", 1, "form-control", "flex-fill", "mr-2", "message", 3, "ngModel", "ngModelChange", "keyup"], ["input", ""], [1, "btn", "btn-md", "btn-primary", 3, "click"], ["class", "error-msg", 4, "ngIf"], ["fxLayout", "row"], [1, "mr-1"], [1, "mr-3"], ["fxFlex", "auto"], ["class", "far fa-trash-alt", 3, "click", 4, "ngIf"], [1, "far", "fa-trash-alt", 3, "click"], [1, "error-msg"]], template: function EventChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventChatComponent_li_2_Template, 9, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventChatComponent_Template_input_ngModelChange_4_listener($event) { return ctx.message = $event; })("keyup", function EventChatComponent_Template_input_keyup_4_listener($event) { return ctx.enter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventChatComponent_Template_button_click_6_listener() { return ctx.submitMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Publier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventChatComponent_span_8_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorOnPublish);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["li[_ngcontent-%COMP%]{\n  list-style-type: none;\n}\n\n.list-messages[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(90vh - 160px);\n  margin-bottom: 20%;\n}\n\nul[_ngcontent-%COMP%]{\n  padding-inline-start: 0;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.error-msg[_ngcontent-%COMP%]{\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJldmVudC1jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubGlzdC1tZXNzYWdlcyB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIDE2MHB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG51bHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbi5mYS10cmFzaC1hbHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcnJvci1tc2d7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-chat',
                templateUrl: './event-chat.component.html',
                styleUrls: ['./event-chat.component.css']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
        }] }); })();


/***/ }),

/***/ "p/l/":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/event */ "QrpZ");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function (a0) { return { _id: a0 }; };
const _c1 = function (a1) { return ["/eventDetail", a1]; };
function EventComponent_mat_card_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.event._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.event.name);
} }
function EventComponent_mat_card_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.event.name);
} }
function EventComponent_mat_card_0_mat_card_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type: ", ctx_r6.event.type, "");
} }
function EventComponent_mat_card_0_mat_card_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D\u00E9but : ", ctx_r7.event.dateDebutString, "");
} }
function EventComponent_mat_card_0_mat_card_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Commence dans ", ctx_r8.event.timeLeft.days, " jours, ", ctx_r8.event.timeLeft.hours, " heures et ", ctx_r8.event.timeLeft.minutes, " minutes");
} }
function EventComponent_mat_card_0_mat_card_content_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Fin : ", ctx_r9.event.dateFinString, " \u00E0 ", ctx_r9.event.endTime, " ");
} }
function EventComponent_mat_card_0_mat_card_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lieu : ", ctx_r10.event.lieu, "");
} }
function EventComponent_mat_card_0_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description : ", ctx_r11.event.description, "");
} }
function EventComponent_mat_card_0_mat_card_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.event.space_and_time);
} }
function EventComponent_mat_card_0_mat_card_content_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.event.pricing_info);
} }
const _c2 = function (a0) { return { user: a0 }; };
const _c3 = function (a1) { return ["/otherProfile", a1]; };
function EventComponent_mat_card_0_mat_card_content_12_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r19.event.createur)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.event.createur, "");
} }
function EventComponent_mat_card_0_mat_card_content_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Organisateur : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_mat_card_0_mat_card_content_12_a_2_Template, 2, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.currentUser && ctx_r14.event.emailCreateur !== ctx_r14.currentUser.email && ctx_r14.event.createByOwner || !ctx_r14.currentUser && ctx_r14.event.createByOwner)("ngIfElse", _r15);
} }
function EventComponent_mat_card_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.event.createur);
} }
function EventComponent_mat_card_0_mat_card_content_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Contact : ", ctx_r17.event.emailCreateur, "");
} }
const _c4 = function (a1) { return ["/createEvent", a1]; };
function EventComponent_mat_card_0_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Modifier l'\u00E9v\u00E8nement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r18.event._id)));
} }
function EventComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_mat_card_0_a_1_Template, 3, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_mat_card_0_ng_template_2_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventComponent_mat_card_0_mat_card_content_4_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventComponent_mat_card_0_mat_card_content_5_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventComponent_mat_card_0_mat_card_content_6_Template, 2, 3, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventComponent_mat_card_0_mat_card_content_7_Template, 2, 2, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventComponent_mat_card_0_mat_card_content_8_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventComponent_mat_card_0_mat_card_content_9_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventComponent_mat_card_0_mat_card_content_10_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EventComponent_mat_card_0_mat_card_content_11_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EventComponent_mat_card_0_mat_card_content_12_Template, 3, 2, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EventComponent_mat_card_0_ng_template_13_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventComponent_mat_card_0_mat_card_content_15_Template, 2, 1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventComponent_mat_card_0_a_16_Template, 3, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.details)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.dateDebutString);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.timeLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.dateFinString && ctx_r0.event.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.lieu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.space_and_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.pricing_info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.createur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.emailCreateur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser && ctx_r0.event.createByOwner && ctx_r0.event.emailCreateur === ctx_r0.currentUser.email);
} }
function EventComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliquez sur un event dans la liste ou sur la carte pour afficher les d\u00E9tails ici");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EventComponent {
    constructor(userService, eventService) {
        this.userService = userService;
        this.eventService = eventService;
        this.event = new _shared_models_event__WEBPACK_IMPORTED_MODULE_1__["Event"]();
    }
    ngOnInit() {
        this.subscription = this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
        this.eventService.getEventFromTopBar().subscribe((event) => {
            this.event = event;
        });
    }
    ngOnChanges(changes) {
        const e = changes.inputEvent.currentValue;
        if (typeof e !== 'undefined') {
            this.event = new _shared_models_event__WEBPACK_IMPORTED_MODULE_1__["Event"](e._id, e.name, e.dateDebut, e.beginTime, e.dateFin, e.endTime, e.type, e.description, e.lieu, e.latitude, e.longitude, e.createur, e.emailCreateur, e.timeLeft, e.createOwner);
            this.event.setSpaceAndTime(e.space_and_time);
            this.event.setPricingInfo(e.pricing_info);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"])); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], inputs: { details: "details", inputEvent: "inputEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["noevent", ""], [1, "container"], ["class", "nav-link", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["noLink", ""], [4, "ngIf"], ["id", "organisateur", 4, "ngIf"], ["current", ""], ["class", "nav-link", 3, "routerLink", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], ["id", "organisateur"], ["mat-raised-button", "", "color", "primary"], [1, "noevent"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventComponent_mat_card_0_Template, 17, 13, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event.name)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: scroll;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.noevent[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n#organisateur[_ngcontent-%COMP%] {\n  display:flex;\n  flex-direction: row;\n  margin-bottom: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0px 3px;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0px 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ub2V2ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jb3JnYW5pc2F0ZXVyIHtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmEge1xuICBwYWRkaW5nOiAwcHggM3B4O1xufVxuXG5wIHtcbiAgcGFkZGluZzogMHB4IDNweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }]; }, { details: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vJQl":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/meta-and-title.service.ts ***!
  \***********************************************************/
/*! exports provided: MetaAndTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaAndTitleService", function() { return MetaAndTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_meta_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/meta-data */ "W52M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







class MetaAndTitleService {
    constructor(router, title, meta) {
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"];
        this.subscription.add(this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const url = event.url;
                this.updateTitle(url);
                this.updateMeta(url);
            }
        }));
    }
    updateTitle(url) {
        const index = url.indexOf(";");
        if (index !== -1) {
            this.title.setTitle(_helpers_meta_data__WEBPACK_IMPORTED_MODULE_3__["default"][url.substring(0, index)].title);
        }
        this.title.setTitle(_helpers_meta_data__WEBPACK_IMPORTED_MODULE_3__["default"][url].title);
    }
    updateMeta(url) {
        const oldTagDescription = this.meta.getTag('name="description"');
        const newTagDescription = {
            name: 'description',
            content: _helpers_meta_data__WEBPACK_IMPORTED_MODULE_3__["default"][url].metas.description
        };
        oldTagDescription
            ? this.meta.updateTag(newTagDescription)
            : this.meta.addTag(newTagDescription);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MetaAndTitleService.ɵfac = function MetaAndTitleService_Factory(t) { return new (t || MetaAndTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"])); };
MetaAndTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetaAndTitleService, factory: MetaAndTitleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaAndTitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-form/event-form.component */ "moix");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "JGpI");
/* harmony import */ var _other_profile_other_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other-profile/other-profile.component */ "JCQt");
/* harmony import */ var _auth_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/edit-password/edit-password.component */ "JuYP");













const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
    { path: 'createEvent', component: _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__["EventFormComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'profile', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'otherProfile', component: _other_profile_other_profile_component__WEBPACK_IMPORTED_MODULE_9__["OtherProfileComponent"] },
    { path: 'eventDetail', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_8__["EventDetailComponent"] },
    { path: 'editPass', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _auth_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_10__["EditPasswordComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/event */ "QrpZ");
/* harmony import */ var _shared_models_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/event-list */ "XQ/Y");
/* harmony import */ var _shared_models_date_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/date-list */ "Qtnr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/event.service */ "6BoG");
/* harmony import */ var _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/events-api.service */ "0nKt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../event-list/event-list.component */ "JESc");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../map/map.component */ "cNoH");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../event/event.component */ "p/l/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function MainComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", event_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2);
} }
function MainComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", date_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r3);
} }
class MainComponent {
    constructor(userService, eventService, eventsApiService) {
        this.userService = userService;
        this.eventService = eventService;
        this.eventsApiService = eventsApiService;
        this.typeEvents = _shared_models_event_list__WEBPACK_IMPORTED_MODULE_2__["Events"];
        this.dates = _shared_models_date_list__WEBPACK_IMPORTED_MODULE_3__["Dates"];
        this.events = new Array();
        this.eventsOnMap = new Array();
        this.eventsFromHQ = new Array();
        this.filtersType = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.filtersDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.eventService.events.subscribe((events) => {
            this.events = events;
        });
        this.subscription = this.userService.currentUser.subscribe((user) => {
            if (user) {
                this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.email, user.name, user.profile_type, user.amis);
            }
        });
        //this.eventsApiService.signRequestForMusicStory();
        //this.predictHQ();
    }
    predictHQ() {
        for (let i = 0; i < 1000; i += 50) {
            this.eventsApiService.getEventsFromPredictHQ(i).subscribe((res) => {
                let names = new Array();
                for (let e of this.events) {
                    names.push(e.name);
                }
                this.eventsFromHQ = res.results;
                for (let event of this.eventsFromHQ) {
                    if (names.indexOf(event.title) === -1) {
                        const ev = new _shared_models_event__WEBPACK_IMPORTED_MODULE_1__["Event"]();
                        ev.scope = "public";
                        ev.name = event.title;
                        ev.dateDebut = event.start;
                        ev.dateFin = event.end;
                        if (ev.name.startsWith("LE LIDO")) {
                            ev.type = 'cabaret';
                            ev.createur = "Le Lido";
                        }
                        else if (ev.name.startsWith("THE WORLD OF BANKSY")) {
                            ev.type = 'expos';
                        }
                        else if (event.labels.indexOf("comedy") !== -1) {
                            ev.type = 'théâtre';
                        }
                        else {
                            ev.type = event.category;
                        }
                        ev.description = event.description;
                        if (event.entities[0]) {
                            ev.lieu = event.entities[0].formatted_address;
                        }
                        ev.latitude = event.location[1];
                        ev.longitude = event.location[0];
                        console.log(ev);
                        //this.eventService.createEvent(ev);
                    }
                }
            });
        }
    }
    displayEvent(event) {
        this.eventToDisplay = event;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_8__["EventsApiService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 15, vars: 13, consts: [[1, "filtres"], ["appearance", "fill", 1, "filtre"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.xs", "column", 1, "elements"], ["fxFlex", "100", 1, "element", 3, "events", "inputFiltersDate", "inputFiltersType", "outputEvent"], ["fxFlex", "100", 1, "element", 3, "inputFiltersType", "inputEventToZoom", "inputEvents", "inputFiltersDate", "outputEvent"], ["fxFlex", "100", 1, "element", 3, "details", "inputEvent"], [3, "value"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filtrer les types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtrer les dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainComponent_mat_option_10_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-event-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outputEvent", function MainComponent_Template_app_event_list_outputEvent_12_listener($event) { return ctx.displayEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outputEvent", function MainComponent_Template_app_map_outputEvent_13_listener($event) { return ctx.displayEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-event", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.filtersType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.filtersDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events)("inputFiltersDate", ctx.filtersDate.value)("inputFiltersType", ctx.filtersType.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputFiltersType", ctx.filtersType.value)("inputEventToZoom", ctx.eventToDisplay)("inputEvents", ctx.events)("inputFiltersDate", ctx.filtersDate.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", false)("inputEvent", ctx.eventToDisplay);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_13__["EventListComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _map_map_component__WEBPACK_IMPORTED_MODULE_14__["MapComponent"], _event_event_component__WEBPACK_IMPORTED_MODULE_15__["EventComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".filtres[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.filtre[_ngcontent-%COMP%] {\n  margin: 0px 2px;\n  padding: 0px;\n  text-align: center;\n  background: #c5ddf5;\n}\n\n  .mat-form-field-appearance-fill{\n  width: auto;\n  height: 40px;\n}\n\n  .mat-form-field-wrapper { \n  padding-bottom: 0px;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{\n  padding: 0px;\n  background-color: #c5ddf5;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{\n  padding: 0px;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdHJlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRyZSB7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNjNWRkZjU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxse1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgeyBcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXh7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1ZGRmNTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4e1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] }, { type: _shared_services_events_api_service__WEBPACK_IMPORTED_MODULE_8__["EventsApiService"] }]; }, null); })();


/***/ }),

/***/ "xgtH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/chat.service.ts ***!
  \*************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ChatService {
    constructor(http) {
        this.http = http;
    }
    getMessages(eventId) {
        return this.http.get('/api/event/getMessages', {
            params: {
                eventId: eventId
            }
        });
    }
    saveMessage(message) {
        return this.http.post('/api/event/saveMessage', message);
    }
    deleteEvent(messageId) {
        return this.http.delete('/api/chat/deleteMessage', {
            params: {
                messageId: messageId
            }
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map