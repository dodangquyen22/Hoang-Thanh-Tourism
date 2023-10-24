import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    navigator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
})

/* fonts */
export const FontFamily = {
    customNavigation: "Inter-Bold",
  };
  /* font sizes */
  export const FontSize = {
    customNavigation_size: 12,
  };
  /* Colors */
  export const Color = {
    bottomNavigationBottomNavigationBackgroundColor: "#fff",
    bottomNavigationBottomNavigationBorderColor: "#e2e2e2",
    bottomNavigationBottomNavigationSelectedColor: "#000",
  };
  /* Paddings */
  export const Padding = {
    p_base: 16,
    p_5xs: 8,
    p_2xs: 11,
  };
  /* border radiuses */
  export const Border = {
    br_5xs: 8,
    br_81xl: 100,
  };
  