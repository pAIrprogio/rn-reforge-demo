import React, { Suspense } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getArticles } from "./getArticles.query";
import { theme } from "./theme";

const ArticleList = () => {
  const { data: articles } = useSuspenseQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardContent}>{item.content}</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <Suspense fallback={<Text style={styles.loadingText}>Loading...</Text>}>
        <ArticleList />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  header: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
  },
  headerText: {
    ...theme.fonts.heading,
    color: theme.colors.light,
  },
  listContainer: {
    padding: theme.spacing.medium,
  },
  card: {
    ...theme.shadows.card,
    backgroundColor: theme.colors.light,
    borderRadius: 8,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  cardTitle: {
    ...theme.fonts.heading,
    fontSize: 18,
    marginBottom: theme.spacing.small,
  },
  cardContent: {
    ...theme.fonts.p,
  },
  loadingText: {
    ...theme.fonts.p,
    textAlign: "center",
    padding: theme.spacing.large,
  },
});
