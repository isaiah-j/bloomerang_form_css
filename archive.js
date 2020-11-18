'<style text=\'text/css\'>' + 
'.donation-form label{color: #404040;' + 
'                display: block;}' + 
'' + 
'.donation-form label.error,' + 
'                     .donation-form #card-errors{color: #900;}' + 
'' + 
'.donation-form label.error{display: inline-block;' + 
'                padding: 0 10px;}' + 
'' + 
'.donation-form section{padding: 5px;}' + 
'' + 
'.donation-form .field{padding: 4px 0;}' + 
'' + 
'.donation-form .field .required-star{color: #aa0000; ' + 
'                display: inline-block; ' + 
'                margin-left: 5px;}' + 
'' + 
'.donation-form .field .checkboxes{' + 
'                border: 1px solid #A9A9A9;' + 
'                -webkit-transition: all .3s ease-out;' + 
'                -moz-transition: all .3s ease-out;' + 
'                transition: all .3s ease-out;}' + 
'' + 
'.donation-form .field .checkbox{display:block;' + 
'                position:relative;' + 
'                -moz-box-sizing:border-box;' + 
'                box-sizing:border-box;' + 
'                height:30px;' + 
'                line-height:26px;' + 
'                padding:2px 28px 2px 8px;' + 
'                border-bottom:1px solid rgba(0,0,0,0.1);' + 
'                color:#404040;  ' + 
'                overflow:hidden;' + 
'                text-decoration:none; }' + 
'' + 
'.donation-form .field .checkbox input{opacity:0.01;' + 
'                position:absolute;' + 
'                left:-50px;  ' + 
'                z-index:-5;}' + 
'' + 
'.donation-form .field .checkbox:last-child{border-bottom:none;}' + 
'' + 
'.donation-form .field .checkbox.selected{background: rgb(50, 142, 253);' + 
'                color:#fff; }' + 
'' + 
'.donation-form .field .checkbox.selected:before{color:#fff;' + 
'                line-height:30px;' + 
'                position:absolute;' + 
'                right:10px; }' + 
'' + 
'.donation-form .field input,' + 
'                     .donation-form .field select,' + 
'                     .donation-form .field textarea,' + 
'                     .donation-form #card-element{padding: 4px; ' + 

'                width: 96%}' + 
'' + 
'.donation-form .field .StripeElement{background-color: white;' + 
'                background-color: -moz-field;' + 
'                border: 1px solid darkgray;' + 
'                display: inline-block;}' + 
'' + 
'.donation-form .field textarea.international{height: 120px;}' + 
'' + 
'.donation-form .field select{box-sizing: content-box;}' + 
'' + 
'.donation-form .section.recurring{padding-left: 30px}' + 
'' + 
'.donation-form .field.radio label,' + 
'                     .donation-form .field.checkbox label{display: inline-block;}' + 
'' + 
'.donation-form .field.radio input,' + 
'                     .donation-form .field.checkbox input{width: auto;' + 
'                margin-left:0;}' + 
'' + 
'.donation-form .section.consent .field.checkbox:not(.consent-all){margin-left: 20px;}' + 
'' + 
'.donation-form #cardExpirationMonth,' + 
'                     .donation-form #cardExpirationYear{width: 85px;}' + 
'' + 
'.donation-form #security-code{width: 55px;}' + 
'' + 
'.donation-form .field .sidenote{color: #999;' + 
'                font-size: 10px; }' + 
'' + 
'.donation-form .field.other-option,' + 
'                     .donation-form .field.other-amount,' + 
'                     .donation-form .field.cardExpirationMonth,' + 
'                     .donation-form .field.cardExpirationYear{display: inline-block;}' + 
'' + 
'.donation-form .field.other-amount{padding-left: 6px;}' + 
'' + 
'.donation-form .field.cardExpirationMonth{padding-right: 20px;}' + 
'' + 
'.donation-form #other-amount{width: 65px;}' + 
'' + 
'.donation-form #frequency{width: 85px;}' + 
'' + 
'.donation-form #start-date{width: 150px;}' + 
'' + 
'.donation-form .errors{border: 1px solid #900;' + 
'                color: #900;  ' + 
'                padding: 10px;}' + 
'' + 
'.donation-form .radio label.error{display: inline-block;' + 
'                padding-right: 86%;  ' + 
'                float: right;}' + 
'' + 
'.donation-form .hidden{display: none;}' + 
'' + 
'.btn-group .btn-submit-donation{padding: 4px 10px;}' + 
'' + 
'iframe#spreedly-iframe[style=\'visibility: hidden;\']{display: none;}' + 
'' + 
'input, select, textarea, button{font-family: inherit;}' + 
'' + 
'#spreedly-modal-overlay[style="visibility:hidden"]{display: none;}' + 
'' + 
'</style>' + 
'' + 
'<div id="donation-form-container">' + 
'  <form id="donation-form" class="donation-form" method="post" onsubmit="event.preventDefault(); collectPayment();">' + 
'    <div class="errors hidden"></div>' + 
'    <div class="section donation">' + 
'      <h3>Donation</h3>' + 

'<div class="field radio 2300928 required" >' + 
'<label for="2300928"><input id="2300928" name="donation-level" class="required" type="radio" value="2450.000000" maxlength="255"></input><span class="label">$2,450.00 - End homelessness for an entire family</span></label>' + 
'</div>' + 
'<div class="field radio 2300929 required" >' + 
'<label for="2300929"><input id="2300929" name="donation-level" class="required" type="radio" value="686.000000" maxlength="255"></input><span class="label">$686.00 - Give one week of holistic care and empowerment for an entire family</span></label>' + 
'</div>' + 
'<div class="field radio 2300930 required" >' + 
'<label for="2300930"><input id="2300930" name="donation-level" class="required" type="radio" value="171.000000" maxlength="255"></input><span class="label">$171.00 - Offer one week of stability to a pregnant mother</span></label>' + 
'</div>' + 
'<div class="field radio 2300931 required" >' + 
'<label for="2300931"><input id="2300931" name="donation-level" class="required" type="radio" value="98.000000" maxlength="255"></input><span class="label">$98.00 - Give a warm place and safe night of sleep to an entire family</span></label>' + 
'</div>' + 
'<div class="field radio 2300932 required" >' + 
'<label for="2300932"><input id="2300932" name="donation-level" class="required" type="radio" value="49.000000" maxlength="255"></input><span class="label">$49.00 - Comfort a homeless child and her father with a night of rest</span></label>' + 
'</div>' + 
'<div class="field radio 2300933 required" >' + 
'<label for="2300933"><input id="2300933" name="donation-level" class="required" type="radio" value="24.500000" maxlength="255"></input><span class="label">$24.50 - Provide a homeless child\'s first night of stability</span></label>' + 
'</div>' + 
'<div class="field radio other-option required" >' + 
'<label for="other-option"><input id="other-option" name="donation-level" class="required" type="radio" maxlength="255"></input><span class="label">Other</span></label>' + 
'</div>' + 
'<div class="field text other-amount" >' + 
'<input id="other-amount" name="other-amount" class="otherAmount" type="text" placeholder="$0.00"></input>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section recurring">' + 
'      <div class="field checkbox recurring" >' + 
'<label for="recurring"><input id="recurring" name="recurring" type="checkbox" maxlength="255"></input><span class="label">Show my support by making this a recurring donation</span></label>' + 
'</div>' + 
'<div class="field  frequency required" style="display: none">' + 
'<label for="frequency">Frequency<span class="required-star">*</span></label>' + 
'<select id="frequency" name="frequency" class="required"><option value=""></option>' + 
'<option value="Weekly">Weekly</option>' + 
'<option value="Monthly" selected>Monthly</option>' + 
'<option value="Quarterly">Quarterly</option>' + 
'<option value="Yearly">Yearly</option>' + 
'</select>' + 
'</div>' + 
'<div class="field date start-date required" style="display: none">' + 
'<label for="start-date"><span class="label">Start Date</span><span class="required-star">*</span></label>' + 
'<input id="start-date" name="start-date" class="validDate required" type="date" placeholder="mm/dd/yyyy"></input>' + 
'</div>' + 
'' + 
'</div>' + 
'    ' + 
'    <div class="section contact">' + 
'      <h3>Donor Information</h3>' + 

'<div id="test-container">' +
'<div id="testy">'+
'<div class="field text first-name required" >' + 
'<label for="first-name"><span class="label">First Name</span><span class="required-star">*</span></label>' + 
'<input id="first-name" name="first-name" class="required" type="text"></input>' + 
'</div>' + 
'<div class="field text last-name required" >' + 
'<label for="last-name"><span class="label">Last Name</span><span class="required-star">*</span></label>' + 
'<input id="last-name" name="last-name" class="required" type="text"></input>' + 
'</div>' +
'</div>' +

'<div class="field  street-address required" id="address">' + 
'<label for="street-address"><span class="label">Address</span><span class="required-star">*</span></label>' + 
'<textarea id="street-address" name="street-address" class="required"></textarea>' + 
'<div id="locations">' + 
'<div class="field text city required" >' + 
'<label for="city"><span class="label">City</span><span class="required-star">*</span></label>' + 
'<input id="city" name="city" class="required" type="text" data-us-label="City" data-bm-label="Parish"></input>' + 
'</div>' + 
'<div class="field  state required" >' + 
'<label for="state">State<span class="required-star">*</span></label>' + 
'<select id="state" name="state" class="required"><option value=""></option>' + 
'<option value="AL">Alabama</option>' + 
'<option value="AK">Alaska</option>' + 
'<option value="AS">American Samoa</option>' + 
'<option value="AZ">Arizona</option>' + 
'<option value="AR">Arkansas</option>' + 
'<option value="AE">Armed Forces Africa, Canada, Europe, Middle East</option>' + 
'<option value="AA">Armed Forces Americas (except Canada)</option>' + 
'<option value="AP">Armed Forces Pacific</option>' + 
'<option value="CA">California</option>' + 
'<option value="CO">Colorado</option>' + 
'<option value="CT">Connecticut</option>' + 
'<option value="DE">Delaware</option>' + 
'<option value="DC">District of Columbia</option>' + 
'<option value="FL">Florida</option>' + 
'<option value="GA">Georgia</option>' + 
'<option value="GU">Guam</option>' + 
'<option value="HI">Hawaii</option>' + 
'<option value="ID">Idaho</option>' + 
'<option value="IL">Illinois</option>' + 
'<option value="IN">Indiana</option>' + 
'<option value="IA">Iowa</option>' + 
'<option value="KS">Kansas</option>' + 
'<option value="KY">Kentucky</option>' + 
'<option value="LA">Louisiana</option>' + 
'<option value="ME">Maine</option>' + 
'<option value="MD">Maryland</option>' + 
'<option value="MA">Massachusetts</option>' + 
'<option value="MI">Michigan</option>' + 
'<option value="MN">Minnesota</option>' + 
'<option value="MS">Mississippi</option>' + 
'<option value="MO">Missouri</option>' + 
'<option value="MT">Montana</option>' + 
'<option value="NE">Nebraska</option>' + 
'<option value="NV">Nevada</option>' + 
'<option value="NH">New Hampshire</option>' + 
'<option value="NJ">New Jersey</option>' + 
'<option value="NM">New Mexico</option>' + 
'<option value="NY">New York</option>' + 
'<option value="NC">North Carolina</option>' + 
'<option value="ND">North Dakota</option>' + 
'<option value="OH">Ohio</option>' + 
'<option value="OK">Oklahoma</option>' + 
'<option value="OR">Oregon</option>' + 
'<option value="PA">Pennsylvania</option>' + 
'<option value="PR">Puerto Rico</option>' + 
'<option value="RI">Rhode Island</option>' + 
'<option value="SC">South Carolina</option>' + 
'<option value="SD">South Dakota</option>' + 
'<option value="TN">Tennessee</option>' + 
'<option value="TX">Texas</option>' + 
'<option value="VI">US Virgin Islands</option>' + 
'<option value="UT">Utah</option>' + 
'<option value="VT">Vermont</option>' + 
'<option value="VA">Virginia</option>' + 
'<option value="WA">Washington</option>' + 
'<option value="WV">West Virginia</option>' + 
'<option value="WI">Wisconsin</option>' + 
'<option value="WY">Wyoming</option>' + 
'</select>' + 
'</div>' + 
'<div class="field  province required" style="display: none">' + 
'<label for="province">Province<span class="required-star">*</span></label>' + 
'<select id="province" name="province" class="required"><option value=""></option>' + 
'<option value="AB">Alberta</option>' + 
'<option value="BC">British Columbia</option>' + 
'<option value="MB">Manitoba</option>' + 
'<option value="NB">New Brunswick</option>' + 
'<option value="NL">Newfoundland and Labrador</option>' + 
'<option value="NT">Northwest Territories</option>' + 
'<option value="NS">Nova Scotia</option>' + 
'<option value="NU">Nunavut</option>' + 
'<option value="ON">Ontario</option>' + 
'<option value="PE">Prince Edward Island</option>' + 
'<option value="QC">Quebec</option>' + 
'<option value="SK">Saskatchewan</option>' + 
'<option value="YT">Yukon Territory</option>' + 
'</select>' + 
'</div>' + 
'<div class="field number zip-code required" >' + 
'<label for="zip-code"><span class="label">ZIP Code</span><span class="required-star">*</span></label>' + 
'<input id="zip-code" name="zip-code" class="zipcodeUS required" type="number" minlength="5" maxlength="10"></input>' + 
'</div>' + 
'<div class="field text postal-code required" style="display: none">' + 
'<label for="postal-code"><span class="label">Postal Code</span><span class="required-star">*</span></label>' + 
'<input id="postal-code" name="postal-code" class="required" type="text"></input>' + 
'</div>' + 
'</div>' + 
'</div>'+
'<div class="field  country required" >' + 
'<label for="country">Country<span class="required-star">*</span></label>' + 
'<select id="country" name="country" class="required"><option value=""></option>' + 
'<option value="AF">Afghanistan</option>' + 
'<option value="AX">Aland Islands</option>' + 
'<option value="AL">Albania</option>' + 
'<option value="DZ">Algeria</option>' + 
'<option value="AS">American Samoa</option>' + 
'<option value="AD">Andorra</option>' + 
'<option value="AO">Angola</option>' + 
'<option value="AI">Anguilla</option>' + 
'<option value="AQ">Antarctica</option>' + 
'<option value="AG">Antigua and Barbuda</option>' + 
'<option value="AR">Argentina</option>' + 
'<option value="AM">Armenia</option>' + 
'<option value="AW">Aruba</option>' + 
'<option value="AU">Australia</option>' + 
'<option value="AT">Austria</option>' + 
'<option value="AZ">Azerbaijan</option>' + 
'<option value="BS">Bahamas</option>' + 
'<option value="BH">Bahrain</option>' + 
'<option value="BD">Bangladesh</option>' + 
'<option value="BB">Barbados</option>' + 
'<option value="BY">Belarus</option>' + 
'<option value="BE">Belgium</option>' + 
'<option value="BZ">Belize</option>' + 
'<option value="BJ">Benin</option>' + 
'<option value="BM">Bermuda</option>' + 
'<option value="BT">Bhutan</option>' + 
'<option value="BO">Bolivia</option>' + 
'<option value="BA">Bosnia and Herzegovina</option>' + 
'<option value="BW">Botswana</option>' + 
'<option value="BV">Bouvet Island</option>' + 
'<option value="BR">Brazil</option>' + 
'<option value="IO">British Indian Ocean Territory</option>' + 
'<option value="BN">Brunei Darussalam</option>' + 
'<option value="BG">Bulgaria</option>' + 
'<option value="BF">Burkina Faso</option>' + 
'<option value="BI">Burundi</option>' + 
'<option value="KH">Cambodia</option>' + 
'<option value="CM">Cameroon</option>' + 
'<option value="CA">Canada</option>' + 
'<option value="CV">Cape Verde</option>' + 
'<option value="KY">Cayman Islands</option>' + 
'<option value="CF">Central African Republic</option>' + 
'<option value="TD">Chad</option>' + 
'<option value="CL">Chile</option>' + 
'<option value="CN">China</option>' + 
'<option value="CX">Christmas Island</option>' + 
'<option value="CC">Cocos (Keeling) Islands</option>' + 
'<option value="CO">Colombia</option>' + 
'<option value="KM">Comoros</option>' + 
'<option value="CG">Congo</option>' + 
'<option value="CD">Democratic Republic of the Congo</option>' + 
'<option value="CK">Cook Islands</option>' + 
'<option value="CR">Costa Rica</option>' + 
'<option value="CI">Cote d\'Ivoire</option>' + 
'<option value="HR">Croatia</option>' + 
'<option value="CU">Cuba</option>' + 
'<option value="CW">Curacao</option>' + 
'<option value="CY">Cyprus</option>' + 
'<option value="CZ">Czech Republic</option>' + 
'<option value="DK">Denmark</option>' + 
'<option value="DJ">Djibouti</option>' + 
'<option value="DM">Dominica</option>' + 
'<option value="DO">Dominican Republic</option>' + 
'<option value="EC">Ecuador</option>' + 
'<option value="EG">Egypt</option>' + 
'<option value="SV">El Salvador</option>' + 
'<option value="GQ">Equatorial Guinea</option>' + 
'<option value="ER">Eritrea</option>' + 
'<option value="EE">Estonia</option>' + 
'<option value="SZ">Eswatini</option>' + 
'<option value="ET">Ethiopia</option>' + 
'<option value="FK">Falkland Islands (Malvinas)</option>' + 
'<option value="FO">Faroe Islands</option>' + 
'<option value="FJ">Fiji</option>' + 
'<option value="FI">Finland</option>' + 
'<option value="FR">France</option>' + 
'<option value="GF">French Guiana</option>' + 
'<option value="PF">French Polynesia</option>' + 
'<option value="TF">French Southern Territories</option>' + 
'<option value="GA">Gabon</option>' + 
'<option value="GM">Gambia</option>' + 
'<option value="GE">Georgia</option>' + 
'<option value="DE">Germany</option>' + 
'<option value="GH">Ghana</option>' + 
'<option value="GI">Gibraltar</option>' + 
'<option value="GR">Greece</option>' + 
'<option value="GL">Greenland</option>' + 
'<option value="GD">Grenada</option>' + 
'<option value="GP">Guadeloupe</option>' + 
'<option value="GU">Guam</option>' + 
'<option value="GT">Guatemala</option>' + 
'<option value="GG">Guernsey</option>' + 
'<option value="GN">Guinea</option>' + 
'<option value="GW">Guinea-Bissau</option>' + 
'<option value="GY">Guyana</option>' + 
'<option value="HT">Haiti</option>' + 
'<option value="HM">Heard Island</option>' + 
'<option value="HN">Honduras</option>' + 
'<option value="HK">Hong Kong</option>' + 
'<option value="HU">Hungary</option>' + 
'<option value="IS">Iceland</option>' + 
'<option value="IN">India</option>' + 
'<option value="ID">Indonesia</option>' + 
'<option value="IR">Islamic Republic of Iran</option>' + 
'<option value="IQ">Iraq</option>' + 
'<option value="IE">Ireland</option>' + 
'<option value="IM">Isle of Man</option>' + 
'<option value="IL">Israel</option>' + 
'<option value="IT">Italy</option>' + 
'<option value="JM">Jamaica</option>' + 
'<option value="JP">Japan</option>' + 
'<option value="JE">Jersey</option>' + 
'<option value="JO">Jordan</option>' + 
'<option value="KZ">Kazakhstan</option>' + 
'<option value="KE">Kenya</option>' + 
'<option value="KI">Kiribati</option>' + 
'<option value="KP">Democratic People\'s Republic of Korea</option>' + 
'<option value="KR">Republic of Korea</option>' + 
'<option value="KW">Kuwait</option>' + 
'<option value="KG">Kyrgyzstan</option>' + 
'<option value="LA">Lao People\'s Democratic Republic</option>' + 
'<option value="LV">Latvia</option>' + 
'<option value="LB">Lebanon</option>' + 
'<option value="LS">Lesotho</option>' + 
'<option value="LR">Liberia</option>' + 
'<option value="LY">Libya</option>' + 
'<option value="LI">Liechtenstein</option>' + 
'<option value="LT">Lithuania</option>' + 
'<option value="LU">Luxembourg</option>' + 
'<option value="MO">Macao</option>' + 
'<option value="MK">Macedonia</option>' + 
'<option value="MG">Madagascar</option>' + 
'<option value="MW">Malawi</option>' + 
'<option value="MY">Malaysia</option>' + 
'<option value="MV">Maldives</option>' + 
'<option value="ML">Mali</option>' + 
'<option value="MT">Malta</option>' + 
'<option value="MH">Marshall Islands</option>' + 
'<option value="MQ">Martinique</option>' + 
'<option value="MR">Mauritania</option>' + 
'<option value="MU">Mauritius</option>' + 
'<option value="YT">Mayotte</option>' + 
'<option value="MX">Mexico</option>' + 
'<option value="FM">Federated States of Micronesia</option>' + 
'<option value="MD">Republic of Moldova</option>' + 
'<option value="MC">Monaco</option>' + 
'<option value="MN">Mongolia</option>' + 
'<option value="ME">Montenegro</option>' + 
'<option value="MS">Montserrat</option>' + 
'<option value="MA">Morocco</option>' + 
'<option value="MZ">Mozambique</option>' + 
'<option value="MM">Myanmar</option>' + 
'<option value="NA">Namibia</option>' + 
'<option value="NR">Nauru</option>' + 
'<option value="NP">Nepal</option>' + 
'<option value="NL">Netherlands</option>' + 
'<option value="NC">New Caledonia</option>' + 
'<option value="NZ">New Zealand</option>' + 
'<option value="NI">Nicaragua</option>' + 
'<option value="NE">Niger</option>' + 
'<option value="NG">Nigeria</option>' + 
'<option value="NU">Niue</option>' + 
'<option value="NF">Norfolk Island</option>' + 
'<option value="MP">Northern Mariana Islands</option>' + 
'<option value="NO">Norway</option>' + 
'<option value="OM">Oman</option>' + 
'<option value="PK">Pakistan</option>' + 
'<option value="PW">Palau</option>' + 
'<option value="PS">State of Palestine</option>' + 
'<option value="PA">Panama</option>' + 
'<option value="PG">Papua New Guinea</option>' + 
'<option value="PY">Paraguay</option>' + 
'<option value="PE">Peru</option>' + 
'<option value="PH">Philippines</option>' + 
'<option value="PN">Pitcairn</option>' + 
'<option value="PL">Poland</option>' + 
'<option value="PT">Portugal</option>' + 
'<option value="PR">Puerto Rico</option>' + 
'<option value="QA">Qatar</option>' + 
'<option value="RE">Reunion</option>' + 
'<option value="RO">Romania</option>' + 
'<option value="RU">Russian Federation</option>' + 
'<option value="RW">Rwanda</option>' + 
'<option value="BL">Saint Barthelemy</option>' + 
'<option value="SH">Ascension and Tristan da Cunha Saint Helena</option>' + 
'<option value="KN">Saint Kitts and Nevis</option>' + 
'<option value="LC">Saint Lucia</option>' + 
'<option value="MF">Saint Martin (French part)</option>' + 
'<option value="PM">Saint Pierre and Miquelon</option>' + 
'<option value="VC">Saint Vincent and the Grenadines</option>' + 
'<option value="WS">Samoa</option>' + 
'<option value="SM">San Marino</option>' + 
'<option value="ST">Sao Tome and Principe</option>' + 
'<option value="SA">Saudi Arabia</option>' + 
'<option value="SN">Senegal</option>' + 
'<option value="RS">Serbia</option>' + 
'<option value="SC">Seychelles</option>' + 
'<option value="SL">Sierra Leone</option>' + 
'<option value="SG">Singapore</option>' + 
'<option value="SX">Sint Maarten (Dutch part)</option>' + 
'<option value="SK">Slovakia</option>' + 
'<option value="SI">Slovenia</option>' + 
'<option value="SB">Solomon Islands</option>' + 
'<option value="SO">Somalia</option>' + 
'<option value="ZA">South Africa</option>' + 
'<option value="GS">South Georgia</option>' + 
'<option value="SS">South Sudan</option>' + 
'<option value="ES">Spain</option>' + 
'<option value="LK">Sri Lanka</option>' + 
'<option value="SD">Sudan</option>' + 
'<option value="SR">Suriname</option>' + 
'<option value="SJ">Svalbard and Jan Mayen</option>' + 
'<option value="SE">Sweden</option>' + 
'<option value="CH">Switzerland</option>' + 
'<option value="SY">Syrian Arab Republic</option>' + 
'<option value="TW">Taiwan</option>' + 
'<option value="TJ">Tajikistan</option>' + 
'<option value="TZ">United Republic of Tanzania</option>' + 
'<option value="TH">Thailand</option>' + 
'<option value="TL">Timor-Leste</option>' + 
'<option value="TG">Togo</option>' + 
'<option value="TK">Tokelau</option>' + 
'<option value="TO">Tonga</option>' + 
'<option value="TT">Trinidad and Tobago</option>' + 
'<option value="TN">Tunisia</option>' + 
'<option value="TR">Turkey</option>' + 
'<option value="TM">Turkmenistan</option>' + 
'<option value="TC">Turks and Caicos Islands</option>' + 
'<option value="TV">Tuvalu</option>' + 
'<option value="UG">Uganda</option>' + 
'<option value="UA">Ukraine</option>' + 
'<option value="AE">United Arab Emirates</option>' + 
'<option value="GB">United Kingdom</option>' + 
'<option value="US" selected>United States</option>' + 
'<option value="UM">United States Minor Outlying Islands</option>' + 
'<option value="UY">Uruguay</option>' + 
'<option value="UZ">Uzbekistan</option>' + 
'<option value="VU">Vanuatu</option>' + 
'<option value="VA">Vatican City</option>' + 
'<option value="VE">Venezuela</option>' + 
'<option value="VN">Viet Nam</option>' + 
'<option value="VG">British Virgin Islands</option>' + 
'<option value="VI">U.S. Virgin Islands</option>' + 
'<option value="WF">Wallis and Futuna</option>' + 
'<option value="EH">Western Sahara</option>' + 
'<option value="YE">Yemen</option>' + 
'<option value="ZM">Zambia</option>' + 
'<option value="ZW">Zimbabwe</option>' + 
'</select>' + 
'</div>' + 
'<div class="field email email-address required" >' + 
'<label for="email-address"><span class="label">Email</span><span class="required-star">*</span></label>' + 
'<input id="email-address" name="email-address" class="email required" type="email" placeholder="someone@website.com"></input>' + 
'</div>' + 
'<div class="field tel phone-number" >' + 
'<label for="phone-number"><span class="label">Phone</span></label>' + 
'<input id="phone-number" name="phone-number" class="phoneUS" type="tel"></input>' + 
'</div>' + 
'' + 
'<div id="test-container">' +
'</div>' + 
'    <div class="section billing-address">' + 

'' + 
'</div>' + 
'    <div class="section payment">' + 
'      <h3>Payment Information</h3>' + 
'      <div class="field text payment required">' + 
'<label for="card-element"><span class="label">Credit or debit card</span><span class="required-star">*</span></label>' + 
'<div id="card-element"></div><div id="card-errors" role="alert"></div></div>' + 
'' + 
'</div>' + 
'    <div class="section custom-fields">' + 
'      <h3>Additional Information</h3>' + 
'      <div class="field text CustomAccountField_2312194" >' + 
'<label for="CustomAccountField_2312194">Want to sign up to receive emails from Family Promise?</label>' + 
'<select id="CustomAccountField_2312194" name="CustomAccountField_2312194"><option value=""></option>' + 
'<option value="2314243">No - Don\'t sign me up.</option>' + 
'<option value="2314242">Yes - Sign me up!</option>' + 
'</select>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section comment">' + 
'      <div class="field text comment" >' + 
'<label for="comment"><span class="label">Comments</span></label>' + 
'<textarea id="comment" name="comment" type="text" value="Comments"></textarea>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section consent hidden">' + 
'      <div class="field checkbox consent-all" >' + 
'<label for="consent-all"><input id="consent-all" name="consent-all" type="checkbox" maxlength="255"></input><span class="label">I would like to receive or continue receiving updates from Family Promise of Spokane</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-email" style="display: none">' + 
'<label for="consent-email"><input id="consent-email" name="consent-email" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by email</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-mail" style="display: none">' + 
'<label for="consent-mail"><input id="consent-mail" name="consent-mail" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by postal mail</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-phone" style="display: none">' + 
'<label for="consent-phone"><input id="consent-phone" name="consent-phone" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by phone</span></label>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section true-impact">' + 
'      <h3>Increase My Impact</h3>' + 
'      <div class="field checkbox true-impact" >' + 
'<label for="true-impact"><input id="true-impact" name="true-impact" type="checkbox" maxlength="255"></input><span class="label">Yes! Add [amount] to help offset bank fees</span></label>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section captcha">' + 
'      <label id=\'noCaptchaResponseError\' class=\'error noCaptchaResponseError\' style=\'display: none\'>You must fill out the CAPTCHA</label><div id="captcha2298880"></div>' + 
'' + 
'</div>' + 
'    <div class="btn-group">' + 
'      <input class="btn btn-submit btn-submit-donation" type="submit" value="Enter Payment" id="express-submit" disabled="true" />' + 
'    </div>' + 
'  </form>' + 
'</div>' + 
'<div id="donation-processing-container" style="display: none">' + 
'  <h2>Processing...</h2><p>Your transaction is being processed. Please do not close your browser or leave this page.</p>' + 
'</div>' + 
'</div>'+
'</div>'+
'' + 
'' +  ''