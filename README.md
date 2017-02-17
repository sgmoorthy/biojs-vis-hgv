# hgv

[![NPM version](http://img.shields.io/npm/v/biojs-vis-hgv.svg)](https://www.npmjs.org/package/biojs-vis-hgv)

> A BioJS component for human genetic variation viewer(protein variants).

## Demo

http://biojs.io/d/biojs-vis-hgv

# Cite

```Choudhary, S., Garcia, L., Nightingale, A., & Martin, M. J. (2015). BioJS-HGV Viewer: Genetic Variation Visualizer. bioRxiv, 032573.``` 

[pdf](http://www.biorxiv.org/content/biorxiv/early/2015/11/23/032573.full.pdf)


# Ported from
 https://github.com/saketkc/biojs-genetic-variation-viewer

## Getting Started
Install the module with: `npm install biojs-vis-hgv`

```javascript
var hgv = require('biojs-vis-hgv');
```

# Screenshots

## Closed view(Default)
![Settings icon](./images/settings.png?raw=true “Settings icon as it should be”)


## Closed view with Zoom
![Closed View + Zoom enabled](./images/closezoomed.png?raw=true “Closed view with Zoom enabled”)


## Open view without Zoom
![Open View](./images/openview.png?raw=true “Open view”)


## Open view with Zoom
![Open View + Zoom enabled](./images/openwithzoomed.png?raw=true “Open view with Zoom enabled”)


## Hide Benign Mutations in Zoomed view
![Hide benign mutations](./images/removebenign.png?raw=true “Hide Benign Mutations”)


## Use only SIFT scores for calculating class of mutation
![Use only SIFT](./images/onlysift.png?raw=true “Use only SIFT”)

## Documentation

#### .hello(name)

**Parameter**: `name`
**Type**: `String`
**Example**: `biojs`

The 'hello' method is responsible for showing a name.

How to use this method

```javascript
hgv.hello('biojs'); // "hello biojs"
```

## Contributing

Please submit all issues and pull requests to the [saketkc/hgv](http://github.com/saketkc/hgv2) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/saketkc/hgv2/issues).


## License 


This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2014, BioJS

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
