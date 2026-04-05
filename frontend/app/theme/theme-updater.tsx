// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { setMonacoTheme } from "@/app/monaco/monaco-env";
import { getApi, getSettingsKeyAtom } from "@/store/global";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

export function AppThemeUpdater() {
  const theme = useAtomValue(getSettingsKeyAtom("app:theme")) === "light" ? "light" : "dark";
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      getApi().setAppTheme(theme);
    } catch (e) {
      console.warn("failed to set native theme:", e);
    }
    setMonacoTheme(theme);
  }, [theme]);
  return null;
}
