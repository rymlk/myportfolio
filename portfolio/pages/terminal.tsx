import Head from "next/head";
import { CModal } from "@coreui/react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";
import React from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { resolveHref } from "next/dist/shared/lib/router/router";

function showModalInfo(setVisible) {
  setVisible(true);
}
function createCommands({ setVisible, addLineInTerm }) {
  return {
    info: () => {
      showModalInfo(setVisible);
    },
  };
}

function checkCommand(listCommands, command) {
  if (listCommands.hasOwnProperty(command)) {
    return listCommands[command];
  } else return "command not found";
}

export default function Texte({ setVisible }) {
  const [terminalLineData, setTerminalLineData] = React.useState([
    <TerminalOutput>
      Bienvenue sur mon portfolio <span className={styles.emoji}>🖐️</span> !
      <br />
      Tape "<span className={styles.infotexte}>info</span>" pour obtenir plus
      d'informations sur moi.
      <br />
    </TerminalOutput>,
  ]);

  const addLineInTerm = (element) => {
    setTerminalLineData([...terminalLineData, element]);
  };
  const listCommands = createCommands({ setVisible });
  console.log(listCommands);
  return (
    <div className={styles.container}>
      <Terminal
        name="Malki Rayane Portfolio"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          let result = checkCommand(listCommands, terminalInput);

          if (result == "command not found") {
            addLineInTerm(
              <TerminalOutput>Commande non trouvée 🤔</TerminalOutput>
            );
          } else {
            result();
          }
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
