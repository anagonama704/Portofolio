import React from "react";
import { Card, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/material";
import "../../css/about.css";

const About = () => {
    return (
        <div id="about">
            <Card className="img-flip" id="cards" component="figure">
                <div className="flexs">
                    <img
                        src="/images/my_img.jpg"
                        alt=""
                        className="fli myimg"
                    />
                    <div className="fli pro">
                        <h3 className="fli">Profile</h3>
                        <div className="flexs p_pd">
                            <p>渡辺　慧</p>
                            <p>Watanabe Kei</p>
                        </div>
                        <div className="flexs p_pd">
                            <p>生年月日：</p>
                            <p>2001年10月9日生まれ</p>
                        </div>
                        <div className="flexs p_pd">
                            <p>出身地：</p>
                            <p>岐阜県岐阜市</p>
                        </div>
                        <div className="flexs p_pd">
                            <p>趣味：</p>
                            <p>音楽を聴くこと（Kpop , 洋楽）</p>
                        </div>
                    </div>
                </div>
                <figcaption>
                    <h3>Skill</h3>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={70}
                                id="cei"
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/html.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>HTML</h4>
                        <p>命名規則を用いたコーディングが行えます。</p>
                    </Card>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={60}
                                id="cei"
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/css.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>CSS3</h4>
                        <p>
                            主流のflexを用いたレイアウト実装やレスポンシブデザインが行えます。
                        </p>
                    </Card>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={55}
                                id="cei"
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/js.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>JavaScript</h4>
                        <p>
                            ライブラリの実装やAPI取得、基本的なコード（Jquery）は問題なく書けます。
                        </p>
                    </Card>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={73}
                                id="cei"
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/php.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>PHP</h4>
                        <p>
                            PDOを用いたデータベースとの通信やセッションを用いたユーザー認証などができます。
                        </p>
                    </Card>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={60}
                                id="cei"
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/laravel.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>Laravel</h4>
                        <p>
                            Controllerを用いた処理や、Eloquentを用いてCRUDを行えます。
                        </p>
                    </Card>
                    <Card id="skill_cd">
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                            <CircularProgress
                                size="80px"
                                style={{ color: "#3dc1db" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                >
                                    <img
                                        src="/images/react.png"
                                        alt=""
                                        className="logos"
                                    />
                                </Typography>
                            </Box>
                        </Box>
                        <h4>React.js</h4>
                        <p>先月から学習を進めています。</p>
                    </Card>
                </figcaption>
            </Card>
        </div>
    );
};
export { About };
