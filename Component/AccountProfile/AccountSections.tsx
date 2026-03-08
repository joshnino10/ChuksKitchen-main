import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";

// Type for each item
interface SectionItem {
  icon: any;
  title: string;
  subtitle: string;
  type?: "switch";
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

// Type for each section
interface Section {
  SectionsName: string;
  items: SectionItem[];
}

export default function AccountSections() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);

  const sections: Section[] = [
    {
      SectionsName: "Account & Security",
      items: [
        {
          icon: require("../../assets/images/my order icon.png"),
          title: "My Orders",
          subtitle: "Track and manage orders",
        },
        {
          icon: require("../../assets/images/payment icon.png"),
          title: "Payments",
          subtitle: "Methods and billing",
        },
        {
          icon: require("../../assets/images/address icon.png"),
          title: "Addresses",
          subtitle: "Delivery location",
        },
        {
          icon: require("../../assets/images/privacy icon.png"),
          title: "Privacy",
          subtitle: "Security and data",
        },
      ],
    },

    {
      SectionsName: "App Settings",
      items: [
        {
          icon: require("../../assets/images/dark icon.png"),
          title: "Dark Mode",
          subtitle: "Standard bright look",
          type: "switch",
          value: darkMode,
          onValueChange: setDarkMode,
        },
        {
          icon: require("../../assets/images/notification icon.png"),
          title: "Notifications",
          subtitle: "Order status & promos",
          type: "switch",
          value: notifications,
          onValueChange: setNotifications,
        },
      ],
    },   

  ];



  return (
    <View style={styles.Container}>
      {sections.map((section, index) => (
        <View key={index}>
          <Text style={styles.SectionTitle}>{section.SectionsName}</Text>

          <View style={styles.sectionCard}>
            {section.items.map((item, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={item.type === "switch" ? 1 : 0.7} 
                style={[
                  styles.row,
                  i === section.items.length - 1 && styles.lastRow,
                ]}
              >
                <Image source={item.icon} style={styles.icon} />

                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>

                {item.type === "switch" ? (
                  <Switch
                    value={item.value!} 
                    onValueChange={item.onValueChange!} 
                    trackColor={{ false: "#E5E5E5", true: "#1A934E" }}
                    thumbColor={item.value ? "#FFFFFF" : "#F5F5F5"}
                    ios_backgroundColor="#E5E5E5"
                    style={{ transform: [{ scale: 0.6 }] }} 
                  />
                ) : (
                  <Ionicons name="chevron-forward" size={22} color="black" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
    paddingHorizontal: 16,
  },

  SectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
  },

  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    gap: 11,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 17 },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // Android shadow
    elevation: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  icon: {
    width: 38,
    height: 38,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 13,
    color: "gray",
  },
});