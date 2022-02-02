import { FC } from "react";
import {Helmet} from "react-helmet";

const Meta: FC =() => {
    return(
        <div className="wrapper">
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Amado Furniture</title>
                <link rel="icon" type="image/png" href="./favicon.ico"/>
                <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Roboto:500,900,100,300,700,400'/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" type="text/javascript"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" type="text/javascript"/>
            </Helmet>
        </div>
    );
};
export default Meta;