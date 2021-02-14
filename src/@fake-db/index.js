import Mock from "./mock";

import "./db/events";
import "./db/resources";

Mock.onAny().passThrough();
