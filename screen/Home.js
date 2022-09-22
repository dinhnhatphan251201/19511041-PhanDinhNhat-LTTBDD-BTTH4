import { Button } from "@react-native-material/core";
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
const imgBook = require("../assets/book.png");

const Home = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <View style={styles.wrap}>
            <View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        paddingBottom: 20,
                    }}
                >
                    <View style={styles.productInfo}>
                        <View style={styles.img}>
                            <Image source={imgBook} />
                            <Text style={{ width: 100, marginTop: 20 }}>
                                Mã giảm giá đã lưu
                            </Text>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View>
                                <Text style={{ fontWeight: "600" }}>
                                    Nguyên hàm tích phân và ứng dụng
                                </Text>
                                <Text style={{ fontWeight: "600" }}>
                                    Cung cấp bởi Tiki Trading
                                </Text>
                                <Text
                                    style={{
                                        color: "red",
                                        fontWeight: "800",
                                        fontSize: 18,
                                    }}
                                >
                                    141.800vnd
                                </Text>
                                <Text style={{ fontWeight: "300" }}>
                                    131.800vnd
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        width: 50,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "nowrap",
                                    }}
                                >
                                    <TouchableOpacity>
                                        <Text
                                            style={{ fontSize: 30 }}
                                            onPress={() =>
                                                setQuantity(
                                                    quantity <= 1
                                                        ? quantity
                                                        : quantity - 1
                                                )
                                            }
                                        >
                                            -
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20 }}>
                                        {quantity}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text
                                            style={{ fontSize: 20 }}
                                            onPress={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        >
                                            +
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: "#134FEC",
                                        }}
                                    >
                                        Mua sau
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "#134FEC",
                                        marginTop: 20,
                                    }}
                                >
                                    Xem tại đây
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.voucher}>
                        {/* <Button variant="outlined" title="Mã giảm giá" /> */}
                        <View
                            style={{
                                borderColor: "#ccc",
                                borderStyle: "solid",
                                borderTopWidth: 1,
                                borderBottomWidth: 1,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                // paddingTop: 5,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                            }}
                        >
                            <TextInput placeholder="Mã giảm giá" />
                        </View>
                        <Button
                            style={{ backgroundColor: "#134FEC" }}
                            title="Áp dụng"
                        />
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        marginTop: 20,
                        padding: 20,
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Text>Bạn có phiếu quà tặng Tiki/Got it?</Text>
                        <TouchableOpacity>
                            <Text style={{ color: "#134FEC" }}>
                                {" "}
                                Nhập tại đây
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        marginTop: 20,
                        padding: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "800" }}>
                            Tạm tính
                        </Text>
                        <Text
                            style={{
                                color: "red",
                                fontSize: 20,
                                fontWeight: "700",
                            }}
                        >
                            148.800vnd
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        marginTop: 20,
                        padding: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "400",
                                color: "#ccc",
                            }}
                        >
                            Thành tiền
                        </Text>
                        <Text
                            style={{
                                color: "red",
                                fontSize: 20,
                                fontWeight: "700",
                            }}
                        >
                            148.800vnd
                        </Text>
                    </View>
                    <Button
                        style={{
                            padding: 7,
                            backgroundColor: "#E53935",
                            marginTop: 20,
                        }}
                        title="Tiến hành đặt hàng"
                    />
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    wrap: {
        justifyContent: "space-between",
        flex: 1,
    },
    productInfo: {
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    voucher: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
