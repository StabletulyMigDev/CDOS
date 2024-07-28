document.addEventListener("DOMContentLoaded", () => {
    const commandInput = document.getElementById("command-input") as HTMLInputElement;
    const outputDiv = document.querySelector(".output") as HTMLDivElement;

    commandInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = commandInput.value.trim();
            executeCommand(command);
            commandInput.value = "";
        }
    });

    function executeCommand(command: string) {
        const outputLine = document.createElement("div");
        outputLine.textContent = `C:\\> ${command}`;
        outputDiv.appendChild(outputLine);

        // Simple command handling
        switch (command.toLowerCase()) {
            case "dir":
                showDirectory();
                break;
            case "cls":
                clearScreen();
                break;
            case "help":
                showHelp();
                break;
            default:
                showError(command);
                break;
        }
    }

    function showDirectory() {
        const files = ["file1.txt", "file2.txt", "program.exe"];
        files.forEach(file => {
            const fileLine = document.createElement("div");
            fileLine.textContent = file;
            outputDiv.appendChild(fileLine);
        });
    }

    function clearScreen() {
        outputDiv.innerHTML = "";
    }

    function showHelp() {
        const helpText = [
            "DIR - List directory contents",
            "CLS - Clear the screen",
            "HELP - Show this help message"
        ];
        helpText.forEach(line => {
            const helpLine = document.createElement("div");
            helpLine.textContent = line;
            outputDiv.appendChild(helpLine);
        });
    }

    function showError(command: string) {
        const errorLine = document.createElement("div");
        errorLine.textContent = `'${command}' is not recognized as an internal or external command.`;
        outputDiv.appendChild(errorLine);
    }
});
