import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.iphone142Parent}>
      <View style={[styles.iphone142, styles.iphone142Position]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupBg]} />
          <View
            style={[styles.icsharpOutlinedFlagParent, styles.timeLightPosition]}
          >
            <Image
              style={[styles.icsharpOutlinedFlagIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icsharpoutlinedflag.png")}
            />
            <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
              Report a problem
            </Text>
            <Text style={[styles.addAccount, styles.logOutFlexBox]}>
              Add account
            </Text>
            <Text style={[styles.logOut, styles.logOutFlexBox]}>Log out</Text>
            <Image
              style={[styles.mdilogoutIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mdilogout.png")}
            />
            <Image
              style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icsharppeopleoutline.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={styles.icoutlineDataExplorationParent}>
            <Image
              style={[styles.icoutlineDataExplorationIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icoutlinedataexploration.png")}
            />
            <Image
              style={[styles.rideleteBin5LineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rideletebin5line.png")}
            />
            <Text style={[styles.freeUpSpace, styles.dataSaverTypo]}>
              Free up space
            </Text>
            <Text style={[styles.dataSaver, styles.dataSaverTypo]}>
              Data Saver
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <View style={[styles.mySubscribtionParent, styles.parentPosition]}>
            <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
              My Subscribtion
            </Text>
            <Text
              style={[styles.addAccount, styles.logOutFlexBox]}
            >{`Help & Support`}</Text>
            <Text style={[styles.logOut, styles.logOutFlexBox]}>
              Terms and Policies
            </Text>
            <Image
              style={[styles.mdilogoutIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/tablercircleletteri.png")}
            />
            <Image
              style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mdiquestionmarkcircleoutline.png")}
            />
            <Image
              style={[
                styles.materialSymbolscreditCardOIcon,
                styles.iconLayout1,
              ]}
              contentFit="cover"
              source={require("../assets/materialsymbolscreditcardoutline.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.viewPosition]}>
          <View style={[styles.rectangleView, styles.viewPosition]} />
          <View style={[styles.editProfileParent, styles.parentPosition]}>
            <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
              Edit profile
            </Text>
            <Text style={[styles.addAccount, styles.logOutFlexBox]}>
              security
            </Text>
            <Text style={[styles.logOut, styles.logOutFlexBox]}>
              Notifications
            </Text>
            <Text style={[styles.privacy, styles.logOutFlexBox]}>Privacy</Text>
            <Image
              style={[styles.icoutlineLockIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icoutlinelock.png")}
            />
            <Image
              style={[styles.mdilogoutIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconamoonnotification.png")}
            />
            <Image
              style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/materialsymbolsprivacytipoutline.png")}
            />
            <Image
              style={[styles.icsharpOutlinedFlagIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconamoonprofilelight.png")}
            />
          </View>
        </View>
        <Text style={[styles.actions, styles.actionsTypo]}>Actions</Text>
        <Image
          style={[styles.materialSymbolsarrowBackIoIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
        <Text style={[styles.settings, styles.logOutFlexBox]}>Settings</Text>
        <View style={styles.statusBar}>
          <Image
            style={[styles.notchIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.statusIcons}>
            <Image
              style={styles.networkSignalLight}
              contentFit="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
              contentFit="cover"
              source={require("../assets/wifi-signal--light1.png")}
            />
            <Image
              style={[styles.batteryLight, styles.lightSpaceBlock]}
              contentFit="cover"
              source={require("../assets/statusnormal-level100.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon}
            contentFit="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={[styles.timeLight, styles.timeLightPosition]}
            contentFit="cover"
            source={require("../assets/colorclear.png")}
          />
        </View>
        <Text
          style={[styles.cacheCellular, styles.actionsTypo]}
        >{`Cache & cellular`}</Text>
        <Text
          style={[styles.supportAbout, styles.actionsTypo]}
        >{`Support & About`}</Text>
        <Text style={[styles.account, styles.actionsTypo]}>Account</Text>
        <Image
          style={[styles.iphone142Child, styles.iphone142Position]}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone142Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    height: 133,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  timeLightPosition: {
    left: 12,
    top: 13,
    position: "absolute",
  },
  iconLayout1: {
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  logOutFlexBox: {
    textAlign: "left",
    color: Color.bottomNavigationBottomNavigationSelectedColor,
    position: "absolute",
  },
  groupPosition: {
    height: 94,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.9,
    height: 30,
    width: 30,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  dataSaverTypo: {
    left: 68,
    opacity: 0.9,
    textAlign: "left",
    color: Color.bottomNavigationBottomNavigationSelectedColor,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 132,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  viewPosition: {
    height: 172,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  actionsTypo: {
    left: 29,
    textAlign: "left",
    color: Color.bottomNavigationBottomNavigationSelectedColor,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  groupChild: {
    height: 133,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  icsharpOutlinedFlagIcon: {
    width: 30,
    height: 30,
    left: 0,
    top: 0,
  },
  reportAProblem: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    left: 66,
    color: Color.bottomNavigationBottomNavigationSelectedColor,
    top: 8,
  },
  addAccount: {
    top: 47,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    left: 66,
    color: Color.bottomNavigationBottomNavigationSelectedColor,
  },
  logOut: {
    top: 86,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    left: 66,
    color: Color.bottomNavigationBottomNavigationSelectedColor,
  },
  mdilogoutIcon: {
    top: 78,
    width: 30,
    height: 30,
    left: 0,
  },
  icsharpPeopleOutlineIcon: {
    top: 39,
    width: 30,
    height: 30,
    left: 0,
  },
  icsharpOutlinedFlagParent: {
    width: 200,
    height: 108,
  },
  rectangleParent: {
    top: 653,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  icoutlineDataExplorationIcon: {
    top: 39,
  },
  rideleteBin5LineIcon: {
    top: 0,
  },
  freeUpSpace: {
    top: 8,
  },
  dataSaver: {
    top: 47,
  },
  icoutlineDataExplorationParent: {
    left: 15,
    width: 177,
    height: 69,
    top: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 524,
  },
  groupInner: {
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  materialSymbolscreditCardOIcon: {
    left: 1,
    width: 30,
    height: 30,
    top: 0,
  },
  mySubscribtionParent: {
    top: 12,
    width: 212,
    height: 108,
  },
  rectangleContainer: {
    top: 352,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  privacy: {
    top: 125,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.b1_size,
    left: 66,
    color: Color.bottomNavigationBottomNavigationSelectedColor,
  },
  icoutlineLockIcon: {
    top: 117,
    width: 30,
    height: 30,
    left: 0,
  },
  editProfileParent: {
    width: 165,
    height: 147,
    top: 13,
  },
  groupView: {
    top: 140,
  },
  actions: {
    top: 630,
  },
  materialSymbolsarrowBackIoIcon: {
    top: 64,
    left: 23,
    width: 30,
    height: 30,
  },
  settings: {
    top: 69,
    left: 129,
    fontSize: FontSize.size_5xl,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.customNavigation,
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    left: 0,
    top: 0,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    right: 71,
    width: 6,
    height: 6,
    top: 8,
    position: "absolute",
  },
  timeLight: {
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBar: {
    left: 4,
    width: 385,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  cacheCellular: {
    top: 499,
  },
  supportAbout: {
    top: 328,
  },
  account: {
    top: 113,
  },
  iphone142Child: {
    top: 751,
    height: 93,
  },
  iphone142: {
    backgroundColor: Color.bottomNavigationBottomNavigationBackgroundColor,
    overflow: "hidden",
    top: 0,
    height: 844,
  },
  iphone142Parent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame;

