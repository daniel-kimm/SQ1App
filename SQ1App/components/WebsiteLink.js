import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle, Ellipse } from 'react-native-svg';

function WebsiteLink({setIsModalVisible}){
    return(
        <View style={styles.container}>
            <View style={styles.restrictedArea}/>
            <View style={styles.topNavBar}>
                <TouchableOpacity>
                    <Svg style={styles.svg} width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <Circle
                            cx="20" cy="19.9997" r="1.66667" fill="#33363F" stroke="#33363F" strokeWidth="2" strokeLinecap="round"
                        />
                        <Ellipse 
                            cx="10" cy="19.9997" rx="1.66667" ry="1.66667" fill="#33363F" stroke="#33363F" strokeWidth="2" strokeLinecap="round"
                        />
                        <Circle
                            cx="30" cy="19.9997" r="1.66667" fill="#33363F" stroke="#33363F" strokeWidth="2" strokeLinecap="round"
                        />
                    </Svg>
                </TouchableOpacity>
                <View>
                    <Text style={styles.webTitle}>SQ1</Text>
                    <Text style={styles.webLink}>sq1.org</Text>
                </View>
                <TouchableOpacity onPress={()=>setIsModalVisible(false)}>
                    <Svg style={styles.svg} width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <Path
                            d="M22.5 7.5L7.5 22.5" stroke="#33363F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        />
                        <Path
                            d="M7.5 7.5L22.5 22.5" stroke="#33363F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        />
                    </Svg>
                </TouchableOpacity>
            </View>
            <View style={styles.webView}>
            </View>
            <View style={styles.botNavBar}>
                <View style={styles.navSvg}>
                    <TouchableOpacity>
                        <Svg style={styles.svg} width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <Path 
                                d="M31.25 12.5L18.75 25L31.25 37.5" 
                                stroke="black" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                            />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Svg style={styles.svg} width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <Path 
                                d="M18.75 12.5L31.25 25L18.75 37.5" 
                                stroke="black" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Svg style={styles.svg} width="50" height="50" viewBox="0 -2 50 50" fill="none">
                        <Path
                            d="M27.6741 18.9372L36.1505 25.3129L42.5263 16.8365" 
                            stroke="black" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                        />
                        <Path
                            d="M29.25 34.1913C26.6763 35.6772 23.6843 36.2724 20.7379 35.8845C17.7915 35.4966 15.0554 34.1473 12.9541 32.0459C10.8527 29.9446 9.50339 27.2085 9.1155 24.2621C8.7276 21.3157 9.32275 18.3237 10.8087 15.75C12.2946 13.1763 14.5882 11.1649 17.3338 10.0276C20.0794 8.89036 23.1235 8.69084 25.9941 9.46C28.8646 10.2292 31.4011 11.924 33.2103 14.2817C35.0194 16.6394 36 19.5282 36 22.5" 
                            stroke="black" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                        />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    restrictedArea:{
        backgroundColor: "steelblue",
        flex: 0,
    },
    topNavBar:{
        flex: 1,
        backgroundColor: "steelblue",
        borderBottomWidth: 3,
        borderColor: "33363F",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    webView:{
        flex: 10,
        backgroundColor: "white",
    },
    botNavBar:{
        flex: 1,
        backgroundColor: "steelblue",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopWidth: 3,
        borderColor: "33363F",
    },
    navSvg:{
        flexDirection: 'row',
    },
    svg:{
        borderWidth: 0,
    },
    webTitle:{
        textAlign: "center",
        fontSize: 30,
    },
    webLink:{
        textAlign: "center",
        fontSize: 15,
    },
});


export default WebsiteLink;