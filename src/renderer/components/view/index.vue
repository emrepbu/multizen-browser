<template>
    <div class="app-views">
        <div v-if="currentTab" class="app-views-container">
            <template v-for="(session, sessionIndex) in sessions" :key="session.id">
                <web-view-container
                    v-for="(tab, tabIndex) in session.tabs"
                    v-show="currentSessionIndex === sessionIndex && session.currentTabIndex === tabIndex && tab.type !== 'settings'"
                    :key="`${session.id}-${tab.id}`"
                    :tab="tab"
                    :tab-index="tabIndex"
                    :session-index="sessionIndex"
                />
            </template>

            <settings-view
                v-if="currentTab.type === 'settings'"
                :key="currentSessionIndex"
            />
        </div>
    </div>
</template>

<script lang="ts">
import SettingsView from "./pages/settings.vue";
import WebViewContainer from "./pages/webview.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        SettingsView,
        WebViewContainer,
    },

    computed: {
        ...mapGetters("sessions", [
            "currentSession",
            "currentSessionIndex",
            "currentTab",
            "sessions",
        ]),
    },
};
</script>

<style scoped></style>
