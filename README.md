## OpenMoney Gift interface for openmoney-gift-api

The OpenMoney Gift API is a variant of the [OpenMoney API]https://github.com/openmoney/openmoney-api/ 
for use with the [OpenMoney Gift]https://github.com/openmoney/openmoney-gift/ interface.

### Install (e.g. locally or in headless VM)

Copy  openmoney-gift-nginx.conf.example  to  openmoney-gift-nginx.conf  and edit if necessary.


```sh
git clone https://github.com/openmoney/openmoney-gift
cd openmoney-gift
npm install
./install.sh <email from which alerts/response are sent> <URL of site>
```


### License

Copyright [2019] [Dominique Legault]

Minor revisions: 2019/11/03 - 2020/03/29 John Waters
  
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
