import * as vscode from 'vscode'

export const PACKAGE_NAME = 'phpstan'
export const PACKAGE_TITLE = 'Phpstan'
export let config: vscode.WorkspaceConfiguration

export function setConfig(): void {
    config = vscode.workspace.getConfiguration(PACKAGE_NAME)
}
