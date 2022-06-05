/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

//https://www.npmjs.com/package/react-tradingview-embed
import { SymbolInfo } from "react-tradingview-embed";
import { Helmet } from "react-helmet";

import { Error } from "./components/Error";

/**
 * React Component
 */
export interface AAWidgetProps extends BlockAttributes {

}

export const AAWidget = ({}: AAWidgetProps): ReactElement => {

  return <div className="aa-widget">
    <a href="https://www.alaskasworld.com/news/IAmAlaska/tagboard.asp">See more #iamalaska posts</a>
    <div className="tagboard-embed" tgb-embed-id="1777"></div>
    <Helmet><script src="https://static.tagboard.com/embed/assets/js/embed.js"></script></Helmet>


  </div>
};

