import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {MdSearch,MdKeyboardArrowLeft,MdKeyboardArrowDown,MdKeyboardArrowRight} from "react-icons/md"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const  Aside = props => {
    const [width, setWidth] = useState( 225 )
    const onClickCollapsed = () =>{
        let newWidth = width === 225 ? 105 : 225
        setWidth(newWidth)
    }
    const options = [
        'Etherem'
    ];
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
                  width: width
              }}
          >
              <div className="v-card--core hide-overflow v-card--volume elevation-0 fill-height v-card v-card--tile theme--light">
                  {/**/}{" "}
                  <div className="layou t column align-space-between fill-height">
                      <div className="v-menu px-2 v-menu--inline">
                          <div className="v-menu__activator">
                              <button
                                  type="button"
                                  className="v-btn v-btn--block v-btn--depressed v-btn--small theme--light secondary"
                              >
                                  <div className="v-btn__content">
                                      <span>{width === 225 ? "Ethereum" : "ETH"}</span>{" "}
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
                                              {width === 225 ?"Search Markets" :"Search"}
                                          </label>
                                          <input aria-label="Search Markets" type="text" />
                                      </div>
                                      { width === 225 && (
                                          <div className="v-input__append-inner">
                                              <div className="v-input__icon v-input__icon--append">
                                                  <MdSearch
                                                      className="v-icon mdi mdi-magnify theme--light"
                                                  />
                                              </div>
                                          </div>
                                      )}
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
                                          { width === 225 && (
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00000300</div>
                                      </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                              to="/trade"
                              className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                          >
                              <div className="layout">
                                  <div className="flex xs6">
                                      <strong className="no-wrap">EVED</strong>{" "}
                                      { width === 225 && (
                                          <div className="grey--text ellipsis" style={{ width: 100 }}>
                                              0.00000000
                                          </div>
                                      )}
                                  </div>{" "}
                                  { width === 225 && (
                                      <div className="flex text-xs-right xs6">
                                          <span className="grey--text">0.00%</span>{" "}
                                          <div className="grey--text ellipsis">0.00002769</div>
                                      </div>
                                  )}
                              </div>
                          </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">EVED</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00002769</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">EVED</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00002769</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">DBET</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00000300</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">DBET</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00000300</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">EVED</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00002769</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                              <Link
                                  to="/trade"
                                  className="px-3 py-1 hide-overflow v-card v-card--flat v-card--tile theme--light"
                              >
                                  <div className="layout">
                                      <div className="flex xs6">
                                          <strong className="no-wrap">EVED</strong>{" "}
                                          { width === 225 && (
                                              <div className="grey--text ellipsis" style={{ width: 100 }}>
                                                  0.00000000
                                              </div>
                                          )}
                                      </div>{" "}
                                      { width === 225 && (
                                          <div className="flex text-xs-right xs6">
                                              <span className="grey--text">0.00%</span>{" "}
                                              <div className="grey--text ellipsis">0.00002769</div>
                                          </div>
                                      )}
                                  </div>
                              </Link>
                          </div>
                      </div>{" "}
                      <button
                          type="button"
                          className="mt-auto v-btn v-btn--block v-btn--flat theme--light"
                          style={{ position: "relative", flex: "0 1 auto" }}
                          onClick={onClickCollapsed}
                      >
                          <div className="v-btn__content">
                              { width === 225 && (
                              <MdKeyboardArrowLeft
                                  className="v-icon mdi mdi-chevron-left theme--light"
                              />
                              )}
                              { width === 105 && (
                              <MdKeyboardArrowRight
                                  className="v-icon mdi mdi-chevron-right theme--light"
                              />
                              )}
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

