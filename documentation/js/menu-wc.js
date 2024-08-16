'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">first-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' : 'data-bs-target="#xs-controllers-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' :
                                            'id="xs-controllers-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' : 'data-bs-target="#xs-injectables-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' :
                                        'id="xs-injectables-links-module-AppModule-287701df9ca21338d4e343fb73f7b9076bff93088b168fcff4bd02ea468102a12fdb030c848e7f88691424bf24d4d389522a9cc6e62d753afbb8f7c3f7e743ee"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' :
                                            'id="xs-controllers-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' :
                                        'id="xs-injectables-links-module-AuthModule-e087b51b8d1368f78bb9af885483290e3318d51ddc71212f5afde9241198ed5b20b718767613e65187cb277ae0ecae1f5cbfa95fa1760d659230da38954817fd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                            'id="xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                        'id="xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' :
                                            'id="xs-controllers-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' :
                                        'id="xs-injectables-links-module-UsersModule-36f9d3701f16dc700f61c5bc7e23a89f0f48fabd1c417c5db14a28ff4cec85a6b78543a5cfb2e63895c497507eec12aa48d7e990a5a21233e05be7925f5ca076"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});