import React from 'react';
import { Link } from 'react-router-dom';
import {MdSearch,MdKeyboardArrowLeft,MdKeyboardArrowDown} from "react-icons/md"
const  Aside = props => {
    return (
      <div>
          <aside
              className="v-navigation-drawer v-navigation-drawer--clipped v-navigation-drawer--fixed v-navigation-drawer--open theme--light"
              data-booted="true"
              style={{
                  height: "100%",
                  marginTop: 64,
                  maxHeight: "calc(100% - 64px)",
                  transform: "translateX(0px)",
                  width: 225
              }}
          >
              <div className="v-card--core hide-overflow v-card--volume elevation-0 fill-height v-card v-card--tile theme--light">
                  {/**/}{" "}
                  <div className="layout column align-space-between fill-height">
                      <div className="v-menu px-2 v-menu--inline">
                          <div className="v-menu__activator">
                              <button
                                  type="button"
                                  className="v-btn v-btn--block v-btn--depressed v-btn--small theme--light secondary"
                              >
                                  <div className="v-btn__content">
                                      <span>Ethereum</span>{" "}
                                      <MdKeyboardArrowDown
                                          className="v-icon mdi mdi-chevron-down theme--light"
                                      />
                                  </div>
                              </button>
                          </div>
                      </div>{" "}
                      <div className="pa-2">
                          <div className="v-input shrink v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-inverted v-text-field--enclosed v-input--hide-details theme--light">
                              <div className="v-input__control">
                                  <div className="v-input__slot">
                                      <div className="v-text-field__slot">
                                          <label
                                              aria-hidden="true"
                                              className="v-label theme--light"
                                              style={{ left: 0, right: "auto", position: "absolute" }}
                                          >
                                              Search Markets
                                          </label>
                                          <input aria-label="Search Markets" type="text" />
                                      </div>
                                      <div className="v-input__append-inner">
                                          <div className="v-input__icon v-input__icon--append">
                                              <MdSearch
                                                  className="v-icon mdi mdi-magnify theme--light"
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>{" "}
                      <div className="scroll-y v-data-iterator theme--light">
                          <div className="v-data-iterator--volume">
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">DBET</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00000300</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">EVED</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00002769</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">FCT</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.01570000</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">HALO</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.74672310
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="green--text">14.49%</span>{" "}
                                          <div className="grey --text ellipsis">0.00000079</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  href="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">HXRO</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00050000</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">PEG</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00001020</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">VET</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00002300</div>
                                      </div>
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">VTHO</strong>{" "}
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      </div>{" "}
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00001900</div>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                      </div>{" "}
                      <button
                          type="button"
                          className="mt-auto v-btn v-btn--block v-btn--flat theme--light"
                          style={{ position: "relative", flex: "0 1 auto" }}
                      >
                          <div className="v-btn__content">
                              <MdKeyboardArrowLeft
                                  className="v-icon mdi mdi-chevron-left theme--light"
                              />
                          </div>
                      </button>
                  </div>
              </div>
              <div className="v-navigation-drawer__border" />
          </aside>
      </div>
    );
}
export default Aside;

