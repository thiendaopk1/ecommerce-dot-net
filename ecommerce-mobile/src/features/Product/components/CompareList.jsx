import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import './compare.scss';
import CompareItem from './CompareItem';
import { removeAll } from './compareSlice';

CompareList.propTypes = {};

function CompareList(props) {
  const compareList = useSelector((state) => {
    return state.compare.compareItems;
  });

  const history = useHistory();
  useLocation();
  useRouteMatch();

  const handleCompareMore = () => {
    history.push('/products');
  };

  const dispatch = useDispatch();
  const handleRemoveAllCompare = () => {
    const action = removeAll();
    dispatch(action);
  };

  return (
    <div>
      <Container>
        <Grid container>
          <Paper elevation={0} style={{ width: '100%' }}>
            {compareList.length === 0 && (
              <div style={{ height: '600px' }}>
                <Grid container>
                  <Grid
                    item
                    md={4}
                    lg={4}
                    style={{
                      borderRight: '1px solid #e6e6e6',
                      borderBottom: '1px solid #e6e6e6',
                      height: '600px',
                      display: 'flex',
                      borderLeft: '1px solid #e6e6e6',
                    }}
                  >
                    <div className="compare__empty">
                      <div className="compare__empty-content">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AddIcon
                            style={{
                              fontSize: '50px',
                              border: '1px dashed #bdbdbd',
                              cursor: 'pointer',
                            }}
                            onClick={handleCompareMore}
                          />
                          <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    md={4}
                    lg={4}
                    style={{
                      borderRight: '1px solid #e6e6e6',
                      borderBottom: '1px solid #e6e6e6',
                      height: '600px',
                      display: 'flex',
                    }}
                  >
                    <div className="compare__empty">
                      <div className="compare__empty-content">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AddIcon
                            style={{
                              fontSize: '50px',
                              border: '1px dashed #bdbdbd',
                              cursor: 'pointer',
                            }}
                            onClick={handleCompareMore}
                          />
                          <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    lg={4}
                    style={{
                      borderRight: '1px solid #e6e6e6',
                      borderBottom: '1px solid #e6e6e6',
                      height: '600px',
                      display: 'flex',
                    }}
                  >
                    <div className="compare__empty">
                      <div className="compare__empty-content">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AddIcon
                            style={{
                              fontSize: '50px',
                              border: '1px dashed #bdbdbd',
                              cursor: 'pointer',
                            }}
                            onClick={handleCompareMore}
                          />
                          <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )}
            {compareList.length > 0 && (
              <div className="compare__feauture">
                <div className="compare__feauture-title">
                  <Typography>SO SÁNH SẢN PHẨM</Typography>
                  <Button onClick={handleRemoveAllCompare} variant="contained" color="secondary">
                    Xóa tất cả
                  </Button>
                </div>
                <div className="compare__feauture-list">
                  {compareList.length === 3 && (
                    <Grid container>
                      {compareList.map((itemCompare) => (
                        <Grid
                          item
                          key={itemCompare.idp}
                          md={4}
                          lg={4}
                          style={{
                            borderRight: '1px solid #e6e6e6',
                            borderBottom: '1px solid #e6e6e6',
                          }}
                        >
                          <CompareItem item={itemCompare} />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {compareList.length === 2 && (
                    <>
                      <Grid container>
                        {compareList.map((itemCompare) => (
                          <Grid
                            item
                            key={itemCompare.idp}
                            md={4}
                            lg={4}
                            style={{
                              borderRight: '1px solid #e6e6e6',
                              borderBottom: '1px solid #e6e6e6',
                            }}
                          >
                            <CompareItem item={itemCompare} />
                          </Grid>
                        ))}
                        <Grid
                          item
                          md={4}
                          lg={4}
                          style={{
                            borderRight: '1px solid #e6e6e6',
                            borderBottom: '1px solid #e6e6e6',
                          }}
                        >
                          <div className="compare__empty">
                            <div className="compare__empty-content">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <AddIcon
                                  style={{
                                    fontSize: '50px',
                                    border: '1px dashed #bdbdbd',
                                    cursor: 'pointer',
                                  }}
                                  onClick={handleCompareMore}
                                />
                                <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {compareList.length === 1 && (
                    <>
                      <Grid container>
                        {compareList.map((itemCompare) => (
                          <Grid
                            item
                            key={itemCompare.idp}
                            md={4}
                            lg={4}
                            style={{
                              borderRight: '1px solid #e6e6e6',
                              borderBottom: '1px solid #e6e6e6',
                            }}
                          >
                            <CompareItem item={itemCompare} />
                          </Grid>
                        ))}
                        <Grid
                          item
                          md={4}
                          lg={4}
                          style={{
                            borderRight: '1px solid #e6e6e6',
                            borderBottom: '1px solid #e6e6e6',
                          }}
                        >
                          <div className="compare__empty">
                            <div className="compare__empty-content">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <AddIcon
                                  style={{
                                    fontSize: '50px',
                                    border: '1px dashed #bdbdbd',
                                    cursor: 'pointer',
                                  }}
                                  onClick={handleCompareMore}
                                />
                                <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                              </div>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          lg={4}
                          style={{
                            borderRight: '1px solid #e6e6e6',
                            borderBottom: '1px solid #e6e6e6',
                          }}
                        >
                          <div className="compare__empty">
                            <div className="compare__empty-content">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <AddIcon
                                  style={{
                                    fontSize: '50px',
                                    border: '1px dashed #bdbdbd',
                                    cursor: 'pointer',
                                  }}
                                  onClick={handleCompareMore}
                                />
                                <p style={{ marginTop: '10px' }}>Thêm sản phẩm để so sánh</p>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </div>
              </div>
            )}
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default CompareList;
