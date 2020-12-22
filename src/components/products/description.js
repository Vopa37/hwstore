import React, { useContext } from "react";
import { Title, Button } from "./styled";
import TextLine from "../textline/index";
import { Link } from "@reach/router";
import DescriptionLine from "./Descriptionline";
import Image from "./../optimizeMyImg";
import { TextContext } from "../textContext";

const LocalTextLine = () => (
  <TextLine
    text="Specifikace"
    textcolor="#FEC82F"
    linecolor="#EB5D3E"
    animationStart="0.05"
    animationEnd="0.88"
    lightType={false}
  />
);

const Description = (props) => {
  const [text, setText] = useContext(TextContext);

  switch (props.type) {
    case "Notebooky Apple":
      return (
        <div className="bg-grey mh-100vh justify-content-center">
          <div className="d-flex flex-column">
            <Title className="my-8">{props.name}</Title>
            <div>
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-4 my-6 ">
                    <Image alt={props.name} filename={props.image} />
                  </div>
                </div>
              </div>

              <LocalTextLine />

              <div className="d-flex flex-column">
                <div className="row d-block">
                  <DescriptionLine
                    title="procesor:"
                    text={props.description.procesor}
                  />
                  <DescriptionLine title="ram:" text={props.description.ram} />
                  <DescriptionLine
                    title="grafická karta:"
                    text={props.description.gpu}
                  />
                  <DescriptionLine
                    title="úložiště:"
                    text={props.description.storage}
                  />
                  <DescriptionLine
                    title="displej:"
                    text={props.description.display}
                  />
                  <DescriptionLine
                    title="rozhraní:"
                    text={props.description.interface}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/#Formular">
            <Button className="my-8" onClick={() => setText(props.name)}>
              Mám zájem
            </Button>
          </Link>
        </div>
      );
    case "Ostatní Notebooky":
      return (
        <div className="bg-grey mh-100vh justify-content-center">
          <div className="d-flex flex-column">
            <Title className="my-8">{props.name}</Title>
            <div>
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-4 my-6 ">
                    <Image alt={props.name} filename={props.image} />
                  </div>
                </div>
              </div>

              <LocalTextLine />

              <div className="d-flex flex-column">
                <div className="row d-block">
                  <DescriptionLine
                    title="procesor:"
                    text={props.description.procesor}
                  />
                  <DescriptionLine title="ram:" text={props.description.ram} />
                  <DescriptionLine
                    title="grafická karta:"
                    text={props.description.gpu}
                  />
                  <DescriptionLine
                    title="úložiště:"
                    text={props.description.storage}
                  />
                  <DescriptionLine
                    title="displej:"
                    text={props.description.display}
                  />
                  <DescriptionLine
                    title="rozhraní:"
                    text={props.description.interface}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/#Formular">
            <Button className="my-8" onClick={() => setText(props.name)}>
              Mám zájem
            </Button>
          </Link>
        </div>
      );
    case "Monitory":
      return (
        <div className="bg-grey mh-100vh justify-content-center">
          <div className="d-flex flex-column">
            <Title className="my-8">{props.name}</Title>
            <div>
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-4 my-6 ">
                    <Image alt={props.name} filename={props.image} />
                  </div>
                </div>
              </div>
              <LocalTextLine />
              <div className="d-flex flex-column">
                <div className="row d-block">
                  <DescriptionLine
                    title="úhlopříčka:"
                    text={props.description.diagonal}
                  />
                  <DescriptionLine
                    title="rozlišení:"
                    text={props.description.resolution}
                  />
                  <DescriptionLine
                    title="typ monitoru:"
                    text={props.description.monitortype}
                  />
                  <DescriptionLine
                    title="frekvence:"
                    text={props.description.frequency}
                  />
                  <DescriptionLine
                    title="doba odezvy:"
                    text={props.description.delay}
                  />
                  <DescriptionLine
                    title="výstupy:"
                    text={props.description.outputs}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/#Formular">
            <Button className="my-8" onClick={() => setText(props.name)}>
              Mám zájem
            </Button>
          </Link>
        </div>
      );
    case "Projektory":
      return (
        <div className="bg-grey mh-100vh justify-content-center">
          <div className="d-flex flex-column">
            <Title className="my-8">{props.name}</Title>
            <div>
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-4 my-6 ">
                    <Image alt={props.name} filename={props.image} />
                  </div>
                </div>
              </div>

              <LocalTextLine />

              <div className="d-flex flex-column">
                <div className="row d-block">
                  <DescriptionLine
                    title="rozlišení:"
                    text={props.description.resolution}
                  />
                  <DescriptionLine
                    title="formát zobrazení:"
                    text={props.description.format}
                  />
                  <DescriptionLine
                    title="kontrastní poměr:"
                    text={props.description.contrast}
                  />
                  <DescriptionLine
                    title="lampa:"
                    text={props.description.lamp}
                  />
                  <DescriptionLine
                    title="životnost:"
                    text={props.description.servicelife}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/#Formular">
            <Button className="my-8" onClick={() => setText(props.name)}>
              Mám zájem
            </Button>
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default Description;
