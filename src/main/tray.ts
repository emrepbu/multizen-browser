import { BrowserWindow, Menu, Tray, shell, app, nativeImage } from "electron";
import env from "./env";
import { getPath, logsPath } from "./util";

export default class TrayMenuBuilder {
    mainWindow: BrowserWindow;

    tray: Tray | null;

    isForceClose: boolean;

    constructor(mainWindow: BrowserWindow) {
        this.mainWindow = mainWindow;
        this.tray = null;
        this.isForceClose = false;
    }

    buildMenu() {
        const image = nativeImage.createFromPath(getPath("resources/icons/icon.png"));
        const resizedImage = image.resize({ width: 16, height: 16 });
        this.tray = new Tray(resizedImage);

        const contextMenu = this.buildTray();

        this.tray.setToolTip(env.main.appName);
        this.tray.setContextMenu(contextMenu);

        this.tray.on("click", () => {
            this.mainWindow.show();
        });
    }

    buildTray(): Menu {
        return Menu.buildFromTemplate([
            {
                label: "Open MultiZen",
                click: () => {
                    this.mainWindow.show();
                },
            },
            {
                label: "Show logs",
                click: () => {
                    shell.openPath(logsPath);
                },
            },
            {
                label: "Exit",
                click: async () => {
                    app.exit();
                    app.quit();
                },
            },
        ]);
    }

    destroyMenu() {
        this.tray?.destroy();
    }
}
