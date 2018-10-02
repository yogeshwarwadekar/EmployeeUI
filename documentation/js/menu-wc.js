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
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">employee-ui documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
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
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'data-target="#xs-components-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'id="xs-components-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EmployeeformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmployeeformComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'data-target="#xs-directives-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'id="xs-directives-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                        <li class="link">
                                            <a href="directives/OnlynumberDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OnlynumberDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'data-target="#xs-injectables-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'id="xs-injectables-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                        <li class="link">
                                            <a href="injectables/GlobalErrorHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>GlobalErrorHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/serviceClass.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>serviceClass</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'data-target="#xs-pipes-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' : 'id="xs-pipes-links-module-AppModule-743bc03fe6067553aefdb7576adb0368"' }>
                                        <li class="link">
                                            <a href="pipes/datestampPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">datestampPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/employeeModule.html" data-type="entity-link">employeeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-employeeModule-ce1d33013297c0e0360f5d08a7e8d0ac"' : 'data-target="#xs-components-links-module-employeeModule-ce1d33013297c0e0360f5d08a7e8d0ac"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-employeeModule-ce1d33013297c0e0360f5d08a7e8d0ac"' : 'id="xs-components-links-module-employeeModule-ce1d33013297c0e0360f5d08a7e8d0ac"' }>
                                        <li class="link">
                                            <a href="components/EmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmployeeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/employeeRoutingModule.html" data-type="entity-link">employeeRoutingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/GlobalErrorHandlerService.html" data-type="entity-link">GlobalErrorHandlerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/serviceClass.html" data-type="entity-link">serviceClass</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/HeaderInterceptor.html" data-type="entity-link">HeaderInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/ResponseInterceptor.html" data-type="entity-link">ResponseInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ICity.html" data-type="entity-link">ICity</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDepartment.html" data-type="entity-link">IDepartment</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IEmployee.html" data-type="entity-link">IEmployee</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRating.html" data-type="entity-link">IRating</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISkill.html" data-type="entity-link">ISkill</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IState.html" data-type="entity-link">IState</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
