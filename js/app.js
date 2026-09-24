// ipinfo.io配置
const API_BASE_URL = 'https://ipinfo.io/';

// 国家代码到英文全称映射
const COUNTRY_MAP = {
    'AF': 'Afghanistan', 'AX': 'Aland Islands', 'AL': 'Albania', 'DZ': 'Algeria',
    'AS': 'American Samoa', 'AD': 'Andorra', 'AO': 'Angola', 'AI': 'Anguilla',
    'AQ': 'Antarctica', 'AG': 'Antigua and Barbuda', 'AR': 'Argentina', 'AM': 'Armenia',
    'AW': 'Aruba', 'AU': 'Australia', 'AT': 'Austria', 'AZ': 'Azerbaijan',
    'BS': 'Bahamas', 'BH': 'Bahrain', 'BD': 'Bangladesh', 'BB': 'Barbados',
    'BY': 'Belarus', 'BE': 'Belgium', 'BZ': 'Belize', 'BJ': 'Benin',
    'BM': 'Bermuda', 'BT': 'Bhutan', 'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana', 'BV': 'Bouvet Island', 'BR': 'Brazil', 'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi',
    'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada', 'CV': 'Cape Verde',
    'KY': 'Cayman Islands', 'CF': 'Central African Republic', 'TD': 'Chad', 'CL': 'Chile',
    'CN': 'China', 'CX': 'Christmas Island', 'CC': 'Cocos (Keeling) Islands', 'CO': 'Colombia',
    'KM': 'Comoros', 'CG': 'Congo', 'CD': 'Congo, Democratic Republic', 'CK': 'Cook Islands',
    'CR': 'Costa Rica', 'CI': 'Cote D\'Ivoire', 'HR': 'Croatia', 'CU': 'Cuba',
    'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark', 'DJ': 'Djibouti',
    'DM': 'Dominica', 'DO': 'Dominican Republic', 'EC': 'Ecuador', 'EG': 'Egypt',
    'SV': 'El Salvador', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea', 'EE': 'Estonia',
    'ET': 'Ethiopia', 'FK': 'Falkland Islands (Malvinas)', 'FO': 'Faroe Islands', 'FJ': 'Fiji',
    'FI': 'Finland', 'FR': 'France', 'GF': 'French Guiana', 'PF': 'French Polynesia',
    'TF': 'French Southern Territories', 'GA': 'Gabon', 'GM': 'Gambia', 'GE': 'Georgia',
    'DE': 'Germany', 'GH': 'Ghana', 'GI': 'Gibraltar', 'GR': 'Greece',
    'GL': 'Greenland', 'GD': 'Grenada', 'GP': 'Guadeloupe', 'GU': 'Guam',
    'GT': 'Guatemala', 'GG': 'Guernsey', 'GN': 'Guinea', 'GW': 'Guinea-Bissau',
    'GY': 'Guyana', 'HT': 'Haiti', 'HM': 'Heard Island and Mcdonald Islands', 'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras', 'HK': 'Hong Kong', 'HU': 'Hungary', 'IS': 'Iceland',
    'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran, Islamic Republic Of', 'IQ': 'Iraq',
    'IE': 'Ireland', 'IM': 'Isle of Man', 'IL': 'Israel', 'IT': 'Italy',
    'JM': 'Jamaica', 'JP': 'Japan', 'JE': 'Jersey', 'JO': 'Jordan',
    'KZ': 'Kazakhstan', 'KE': 'Kenya', 'KI': 'Kiribati', 'KP': 'Korea, Democratic People\'s Republic of',
    'KR': 'Korea, Republic of', 'KW': 'Kuwait', 'KG': 'Kyrgyzstan', 'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia', 'LB': 'Lebanon', 'LS': 'Lesotho', 'LR': 'Liberia',
    'LY': 'Libyan Arab Jamahiriya', 'LI': 'Liechtenstein', 'LT': 'Lithuania', 'LU': 'Luxembourg',
    'MO': 'Macao', 'MK': 'Macedonia, The Former Yugoslav Republic of', 'MG': 'Madagascar', 'MW': 'Malawi',
    'MY': 'Malaysia', 'MV': 'Maldives', 'ML': 'Mali', 'MT': 'Malta',
    'MH': 'Marshall Islands', 'MQ': 'Martinique', 'MR': 'Mauritania', 'MU': 'Mauritius',
    'YT': 'Mayotte', 'MX': 'Mexico', 'FM': 'Micronesia, Federated States of', 'MD': 'Moldova, Republic of',
    'MC': 'Monaco', 'MN': 'Mongolia', 'ME': 'Montenegro', 'MS': 'Montserrat',
    'MA': 'Morocco', 'MZ': 'Mozambique', 'MM': 'Myanmar', 'NA': 'Namibia',
    'NR': 'Nauru', 'NP': 'Nepal', 'NL': 'Netherlands', 'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia', 'NZ': 'New Zealand', 'NI': 'Nicaragua', 'NE': 'Niger',
    'NG': 'Nigeria', 'NU': 'Niue', 'NF': 'Norfolk Island', 'MP': 'Northern Mariana Islands',
    'NO': 'Norway', 'OM': 'Oman', 'PK': 'Pakistan', 'PW': 'Palau',
    'PS': 'Palestinian Territory, Occupied', 'PA': 'Panama', 'PG': 'Papua New Guinea', 'PY': 'Paraguay',
    'PE': 'Peru', 'PH': 'Philippines', 'PN': 'Pitcairn', 'PL': 'Poland',
    'PT': 'Portugal', 'PR': 'Puerto Rico', 'QA': 'Qatar', 'RE': 'Reunion',
    'RO': 'Romania', 'RU': 'Russian Federation', 'RW': 'Rwanda', 'BL': 'Saint Barthelemy',
    'SH': 'Saint Helena', 'KN': 'Saint Kitts and Nevis', 'LC': 'Saint Lucia', 'MF': 'Saint Martin',
    'PM': 'Saint Pierre and Miquelon', 'VC': 'Saint Vincent and the Grenadines', 'WS': 'Samoa', 'SM': 'San Marino',
    'ST': 'Sao Tome and Principe', 'SA': 'Saudi Arabia', 'SN': 'Senegal', 'RS': 'Serbia',
    'SC': 'Seychelles', 'SL': 'Sierra Leone', 'SG': 'Singapore', 'SK': 'Slovakia',
    'SI': 'Slovenia', 'SB': 'Solomon Islands', 'SO': 'Somalia', 'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands', 'ES': 'Spain', 'LK': 'Sri Lanka', 'SD': 'Sudan',
    'SR': 'Suriname', 'SJ': 'Svalbard and Jan Mayen', 'SZ': 'Swaziland', 'SE': 'Sweden',
    'CH': 'Switzerland', 'SY': 'Syrian Arab Republic', 'TW': 'Taiwan, Province of China', 'TJ': 'Tajikistan',
    'TZ': 'Tanzania, United Republic of', 'TH': 'Thailand', 'TL': 'Timor-Leste', 'TG': 'Togo',
    'TK': 'Tokelau', 'TO': 'Tonga', 'TT': 'Trinidad and Tobago', 'TN': 'Tunisia',
    'TR': 'Turkey', 'TM': 'Turkmenistan', 'TC': 'Turks and Caicos Islands', 'TV': 'Tuvalu',
    'UG': 'Uganda', 'UA': 'Ukraine', 'AE': 'United Arab Emirates', 'GB': 'United Kingdom',
    'US': 'United States', 'UM': 'United States Minor Outlying Islands', 'UY': 'Uruguay', 'UZ': 'Uzbekistan',
    'VU': 'Vanuatu', 'VE': 'Venezuela', 'VN': 'Viet Nam', 'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.', 'WF': 'Wallis and Futuna', 'EH': 'Western Sahara', 'YE': 'Yemen',
    'ZM': 'Zambia', 'ZW': 'Zimbabwe'
};

// 国家代码到中文全称映射
const COUNTRY_MAP_ZH = {
    'AF': '阿富汗', 'AX': '奥兰群岛', 'AL': '阿尔巴尼亚', 'DZ': '阿尔及利亚',
    'AS': '美属萨摩亚', 'AD': '安道尔', 'AO': '安哥拉', 'AI': '安圭拉',
    'AQ': '南极洲', 'AG': '安提瓜和巴布达', 'AR': '阿根廷', 'AM': '亚美尼亚',
    'AW': '阿鲁巴', 'AU': '澳大利亚', 'AT': '奥地利', 'AZ': '阿塞拜疆',
    'BS': '巴哈马', 'BH': '巴林', 'BD': '孟加拉国', 'BB': '巴巴多斯',
    'BY': '白俄罗斯', 'BE': '比利时', 'BZ': '伯利兹', 'BJ': '贝宁',
    'BM': '百慕大', 'BT': '不丹', 'BO': '玻利维亚', 'BA': '波斯尼亚和黑塞哥维那',
    'BW': '博茨瓦纳', 'BV': '布维岛', 'BR': '巴西', 'IO': '英属印度洋领地',
    'BN': '文莱', 'BG': '保加利亚', 'BF': '布基纳法索', 'BI': '布隆迪',
    'KH': '柬埔寨', 'CM': '喀麦隆', 'CA': '加拿大', 'CV': '佛得角',
    'KY': '开曼群岛', 'CF': '中非共和国', 'TD': '乍得', 'CL': '智利',
    'CN': '中国', 'CX': '圣诞岛', 'CC': '科科斯（基林）群岛', 'CO': '哥伦比亚',
    'KM': '科摩罗', 'CG': '刚果', 'CD': '刚果民主共和国', 'CK': '库克群岛',
    'CR': '哥斯达黎加', 'CI': '科特迪瓦', 'HR': '克罗地亚', 'CU': '古巴',
    'CY': '塞浦路斯', 'CZ': '捷克', 'DK': '丹麦', 'DJ': '吉布提',
    'DM': '多米尼克', 'DO': '多米尼加共和国', 'EC': '厄瓜多尔', 'EG': '埃及',
    'SV': '萨尔瓦多', 'GQ': '赤道几内亚', 'ER': '厄立特里亚', 'EE': '爱沙尼亚',
    'ET': '埃塞俄比亚', 'FK': '福克兰群岛', 'FO': '法罗群岛', 'FJ': '斐济',
    'FI': '芬兰', 'FR': '法国', 'GF': '法属圭亚那', 'PF': '法属波利尼西亚',
    'TF': '法属南部领地', 'GA': '加蓬', 'GM': '冈比亚', 'GE': '格鲁吉亚',
    'DE': '德国', 'GH': '加纳', 'GI': '直布罗陀', 'GR': '希腊',
    'GL': '格陵兰', 'GD': '格林纳达', 'GP': '瓜德罗普', 'GU': '关岛',
    'GT': '危地马拉', 'GG': '根西岛', 'GN': '几内亚', 'GW': '几内亚比绍',
    'GY': '圭亚那', 'HT': '海地', 'HM': '赫德岛和麦克唐纳群岛', 'VA': '梵蒂冈',
    'HN': '洪都拉斯', 'HK': '中国香港', 'HU': '匈牙利', 'IS': '冰岛',
    'IN': '印度', 'ID': '印度尼西亚', 'IR': '伊朗', 'IQ': '伊拉克',
    'IE': '爱尔兰', 'IM': '马恩岛', 'IL': '以色列', 'IT': '意大利',
    'JM': '牙买加', 'JP': '日本', 'JE': '泽西岛', 'JO': '约旦',
    'KZ': '哈萨克斯坦', 'KE': '肯尼亚', 'KI': '基里巴斯', 'KP': '朝鲜',
    'KR': '韩国', 'KW': '科威特', 'KG': '吉尔吉斯斯坦', 'LA': '老挝',
    'LV': '拉脱维亚', 'LB': '黎巴嫩', 'LS': '莱索托', 'LR': '利比里亚',
    'LY': '利比亚', 'LI': '列支敦士登', 'LT': '立陶宛', 'LU': '卢森堡',
    'MO': '中国澳门', 'MK': '北马其顿', 'MG': '马达加斯加', 'MW': '马拉维',
    'MY': '马来西亚', 'MV': '马尔代夫', 'ML': '马里', 'MT': '马耳他',
    'MH': '马绍尔群岛', 'MQ': '马提尼克', 'MR': '毛里塔尼亚', 'MU': '毛里求斯',
    'YT': '马约特', 'MX': '墨西哥', 'FM': '密克罗尼西亚', 'MD': '摩尔多瓦',
    'MC': '摩纳哥', 'MN': '蒙古', 'ME': '黑山', 'MS': '蒙特塞拉特',
    'MA': '摩洛哥', 'MZ': '莫桑比克', 'MM': '缅甸', 'NA': '纳米比亚',
    'NR': '瑙鲁', 'NP': '尼泊尔', 'NL': '荷兰', 'AN': '荷属安的列斯',
    'NC': '新喀里多尼亚', 'NZ': '新西兰', 'NI': '尼加拉瓜', 'NE': '尼日尔',
    'NG': '尼日利亚', 'NU': '纽埃', 'NF': '诺福克岛', 'MP': '北马里亚纳群岛',
    'NO': '挪威', 'OM': '阿曼', 'PK': '巴基斯坦', 'PW': '帕劳',
    'PS': '巴勒斯坦', 'PA': '巴拿马', 'PG': '巴布亚新几内亚', 'PY': '巴拉圭',
    'PE': '秘鲁', 'PH': '菲律宾', 'PN': '皮特凯恩群岛', 'PL': '波兰',
    'PT': '葡萄牙', 'PR': '波多黎各', 'QA': '卡塔尔', 'RE': '留尼汪',
    'RO': '罗马尼亚', 'RU': '俄罗斯', 'RW': '卢旺达', 'BL': '圣巴泰勒米',
    'SH': '圣赫勒拿', 'KN': '圣基茨和尼维斯', 'LC': '圣卢西亚', 'MF': '法属圣马丁',
    'PM': '圣皮埃尔和密克隆', 'VC': '圣文森特和格林纳丁斯', 'WS': '萨摩亚', 'SM': '圣马力诺',
    'ST': '圣多美和普林西比', 'SA': '沙特阿拉伯', 'SN': '塞内加尔', 'RS': '塞尔维亚',
    'SC': '塞舌尔', 'SL': '塞拉利昂', 'SG': '新加坡', 'SK': '斯洛伐克',
    'SI': '斯洛文尼亚', 'SB': '所罗门群岛', 'SO': '索马里', 'ZA': '南非',
    'GS': '南乔治亚和南桑威奇群岛', 'ES': '西班牙', 'LK': '斯里兰卡', 'SD': '苏丹',
    'SR': '苏里南', 'SJ': '斯瓦尔巴和扬马延', 'SZ': '斯威士兰', 'SE': '瑞典',
    'CH': '瑞士', 'SY': '叙利亚', 'TW': '中国台湾', 'TJ': '塔吉克斯坦',
    'TZ': '坦桑尼亚', 'TH': '泰国', 'TL': '东帝汶', 'TG': '多哥',
    'TK': '托克劳', 'TO': '汤加', 'TT': '特立尼达和多巴哥', 'TN': '突尼斯',
    'TR': '土耳其', 'TM': '土库曼斯坦', 'TC': '特克斯和凯科斯群岛', 'TV': '图瓦卢',
    'UG': '乌干达', 'UA': '乌克兰', 'AE': '阿联酋', 'GB': '英国',
    'US': '美国', 'UM': '美国本土外小岛屿', 'UY': '乌拉圭', 'UZ': '乌兹别克斯坦',
    'VU': '瓦努阿图', 'VE': '委内瑞拉', 'VN': '越南', 'VG': '英属维尔京群岛',
    'VI': '美属维尔京群岛', 'WF': '瓦利斯和富图纳', 'EH': '西撒哈拉', 'YE': '也门',
    'ZM': '赞比亚', 'ZW': '津巴布韦'
};

// 英文/拼音城市名到中文映射（常见城市）
const CITY_MAP_ZH = {
    // 中国主要城市（拼音）
    'Beijing': '北京', 'Shanghai': '上海', 'Guangzhou': '广州', 'Shenzhen': '深圳',
    'Hangzhou': '杭州', 'Chengdu': '成都', 'Wuhan': '武汉', 'Xi\'an': '西安',
    'Nanjing': '南京', 'Chongqing': '重庆', 'Tianjin': '天津', 'Suzhou': '苏州',
    'Zhengzhou': '郑州', 'Changsha': '长沙', 'Qingdao': '青岛', 'Dalian': '大连',
    'Xiamen': '厦门', 'Kunming': '昆明', 'Harbin': '哈尔滨', 'Shenyang': '沈阳',
    'Changchun': '长春', 'Fuzhou': '福州', 'Hefei': '合肥', 'Shijiazhuang': '石家庄',
    'Taiyuan': '太原', 'Jinan': '济南', 'Nanning': '南宁', 'Guiyang': '贵阳',
    'Lanzhou': '兰州', 'Haikou': '海口', 'Nanchang': '南昌', 'Urumqi': '乌鲁木齐',
    'Lhasa': '拉萨', 'Hohhot': '呼和浩特', 'Yinchuan': '银川', 'Xining': '西宁',
    // 港澳台
    'Hong Kong': '香港', 'Taipei': '台北', 'Macao': '澳门', 'Kaohsiung': '高雄',
    'Taichung': '台中', 'Tainan': '台南', 'Kowloon': '九龙', 'New Territories': '新界',
    // 亚洲主要城市
    'Singapore': '新加坡', 'Tokyo': '东京', 'Osaka': '大阪', 'Yokohama': '横滨',
    'Nagoya': '名古屋', 'Sapporo': '札幌', 'Fukuoka': '福冈', 'Kobe': '神户',
    'Kyoto': '京都', 'Seoul': '首尔', 'Busan': '釜山', 'Incheon': '仁川',
    'Daegu': '大邱', 'Bangkok': '曼谷', 'Kuala Lumpur': '吉隆坡', 'Jakarta': '雅加达',
    'Manila': '马尼拉', 'Hanoi': '河内', 'Ho Chi Minh City': '胡志明市', 'Phnom Penh': '金边',
    'Yangon': '仰光', 'Dhaka': '达卡', 'Mumbai': '孟买', 'Delhi': '德里',
    'New Delhi': '新德里', 'Bangalore': '班加罗尔', 'Hyderabad': '海得拉巴', 'Chennai': '金奈',
    'Kolkata': '加尔各答', 'Pune': '浦那', 'Karachi': '卡拉奇', 'Lahore': '拉合尔',
    'Islamabad': '伊斯兰堡', 'Colombo': '科伦坡', 'Kathmandu': '加德满都', 'Thimphu': '廷布',
    'Male': '马累', 'Ulaanbaatar': '乌兰巴托', 'Astana': '阿斯塔纳', 'Almaty': '阿拉木图',
    'Tashkent': '塔什干', 'Bishkek': '比什凯克', 'Dushanbe': '杜尚别', 'Ashgabat': '阿什哈巴德',
    'Tehran': '德黑兰', 'Baghdad': '巴格达', 'Riyadh': '利雅得', 'Jeddah': '吉达',
    'Mecca': '麦加', 'Medina': '麦地那', 'Kuwait City': '科威特城', 'Doha': '多哈',
    'Manama': '麦纳麦', 'Muscat': '马斯喀特', 'Sanaa': '萨那', 'Damascus': '大马士革',
    'Amman': '安曼', 'Beirut': '贝鲁特', 'Jerusalem': '耶路撒冷', 'Tel Aviv': '特拉维夫',
    'Istanbul': '伊斯坦布尔', 'Ankara': '安卡拉', 'Izmir': '伊兹密尔', 'Baku': '巴库',
    'Yerevan': '埃里温', 'Tbilisi': '第比利斯',
    // 欧洲主要城市
    'Moscow': '莫斯科', 'Saint Petersburg': '圣彼得堡', 'Novosibirsk': '新西伯利亚',
    'Yekaterinburg': '叶卡捷琳堡', 'Kazan': '喀山', 'London': '伦敦', 'Manchester': '曼彻斯特',
    'Birmingham': '伯明翰', 'Liverpool': '利物浦', 'Glasgow': '格拉斯哥', 'Edinburgh': '爱丁堡',
    'Paris': '巴黎', 'Marseille': '马赛', 'Lyon': '里昂', 'Nice': '尼斯',
    'Berlin': '柏林', 'Munich': '慕尼黑', 'Hamburg': '汉堡', 'Frankfurt': '法兰克福',
    'Cologne': '科隆', 'Stuttgart': '斯图加特', 'Rome': '罗马', 'Milan': '米兰',
    'Naples': '那不勒斯', 'Turin': '都灵', 'Madrid': '马德里', 'Barcelona': '巴塞罗那',
    'Valencia': '瓦伦西亚', 'Seville': '塞维利亚', 'Lisbon': '里斯本', 'Porto': '波尔图',
    'Amsterdam': '阿姆斯特丹', 'Rotterdam': '鹿特丹', 'Brussels': '布鲁塞尔', 'Antwerp': '安特卫普',
    'Vienna': '维也纳', 'Zurich': '苏黎世', 'Geneva': '日内瓦', 'Stockholm': '斯德哥尔摩',
    'Oslo': '奥斯陆', 'Copenhagen': '哥本哈根', 'Helsinki': '赫尔辛基', 'Warsaw': '华沙',
    'Krakow': '克拉科夫', 'Prague': '布拉格', 'Budapest': '布达佩斯', 'Athens': '雅典',
    'Dublin': '都柏林', 'Bucharest': '布加勒斯特', 'Sofia': '索菲亚', 'Zagreb': '萨格勒布',
    'Belgrade': '贝尔格莱德', 'Sarajevo': '萨拉热窝', 'Ljubljana': '卢布尔雅那', 'Bratislava': '布拉迪斯拉发',
    'Tallinn': '塔林', 'Riga': '里加', 'Vilnius': '维尔纽斯', 'Minsk': '明斯克',
    'Kiev': '基辅', 'Kharkiv': '哈尔科夫',
    // 北美主要城市
    'New York': '纽约', 'Los Angeles': '洛杉矶', 'Chicago': '芝加哥', 'Houston': '休斯顿',
    'Philadelphia': '费城', 'Phoenix': '菲尼克斯', 'San Antonio': '圣安东尼奥', 'San Diego': '圣地亚哥',
    'Dallas': '达拉斯', 'San Jose': '圣何塞', 'Austin': '奥斯汀', 'Jacksonville': '杰克逊维尔',
    'San Francisco': '旧金山', 'Columbus': '哥伦布', 'Charlotte': '夏洛特', 'Indianapolis': '印第安纳波利斯',
    'Seattle': '西雅图', 'Denver': '丹佛', 'Washington': '华盛顿', 'Boston': '波士顿',
    'Detroit': '底特律', 'Nashville': '纳什维尔', 'Portland': '波特兰', 'Oklahoma City': '俄克拉荷马城',
    'Las Vegas': '拉斯维加斯', 'Louisville': '路易斯维尔', 'Baltimore': '巴尔的摩', 'Milwaukee': '密尔沃基',
    'Albuquerque': '阿尔伯克基', 'Tucson': '图森', 'Fresno': '弗雷斯诺', 'Sacramento': '萨克拉门托',
    'Mesa': '梅萨', 'Kansas City': '堪萨斯城', 'Atlanta': '亚特兰大', 'Miami': '迈阿密',
    'Tampa': '坦帕', 'Orlando': '奥兰多', 'Cleveland': '克利夫兰', 'Cincinnati': '辛辛那提',
    'Pittsburgh': '匹兹堡', 'St. Louis': '圣路易斯', 'Minneapolis': '明尼阿波利斯', 'New Orleans': '新奥尔良',
    'Honolulu': '檀香山', 'Anchorage': '安克雷奇', 'Salt Lake City': '盐湖城', 'Toronto': '多伦多',
    'Vancouver': '温哥华', 'Montreal': '蒙特利尔', 'Calgary': '卡尔加里', 'Ottawa': '渥太华',
    'Edmonton': '埃德蒙顿', 'Quebec': '魁北克', 'Winnipeg': '温尼伯', 'Hamilton': '汉密尔顿',
    'Mexico City': '墨西哥城', 'Guadalajara': '瓜达拉哈拉', 'Monterrey': '蒙特雷',
    // 大洋洲
    'Sydney': '悉尼', 'Melbourne': '墨尔本', 'Brisbane': '布里斯班', 'Perth': '珀斯',
    'Adelaide': '阿德莱德', 'Canberra': '堪培拉', 'Auckland': '奥克兰', 'Wellington': '惠灵顿',
    'Christchurch': '克赖斯特彻奇',
    // 南美洲
    'Sao Paulo': '圣保罗', 'Rio de Janeiro': '里约热内卢', 'Brasilia': '巴西利亚', 'Buenos Aires': '布宜诺斯艾利斯',
    'Lima': '利马', 'Bogota': '波哥大', 'Santiago': '圣地亚哥', 'Caracas': '加拉加斯',
    'Montevideo': '蒙得维的亚', 'Asuncion': '亚松森', 'La Paz': '拉巴斯', 'Quito': '基多',
    // 非洲
    'Cairo': '开罗', 'Alexandria': '亚历山大', 'Lagos': '拉各斯', 'Kinshasa': '金沙萨',
    'Johannesburg': '约翰内斯堡', 'Cape Town': '开普敦', 'Durban': '德班', 'Nairobi': '内罗毕',
    'Addis Ababa': '亚的斯亚贝巴', 'Casablanca': '卡萨布兰卡', 'Tunis': '突尼斯', 'Algiers': '阿尔及尔',
    'Tripoli': '的黎波里', 'Khartoum': '喀土穆', 'Accra': '阿克拉', 'Dakar': '达喀尔',
    'Luanda': '罗安达', 'Harare': '哈拉雷', 'Kampala': '坎帕拉', 'Dar es Salaam': '达累斯萨拉姆'
};

// 英文/拼音地区名到中文映射（常见省份/州）
const REGION_MAP_ZH = {
    // 中国省份（拼音）
    'Beijing': '北京', 'Shanghai': '上海', 'Tianjin': '天津', 'Chongqing': '重庆',
    'Hebei': '河北', 'Shanxi': '山西', 'Liaoning': '辽宁', 'Jilin': '吉林',
    'Heilongjiang': '黑龙江', 'Jiangsu': '江苏', 'Zhejiang': '浙江', 'Anhui': '安徽',
    'Fujian': '福建', 'Jiangxi': '江西', 'Shandong': '山东', 'Henan': '河南',
    'Hubei': '湖北', 'Hunan': '湖南', 'Guangdong': '广东', 'Hainan': '海南',
    'Sichuan': '四川', 'Guizhou': '贵州', 'Yunnan': '云南', 'Shaanxi': '陕西',
    'Gansu': '甘肃', 'Qinghai': '青海', 'Taiwan': '台湾', 'Nei Mongol': '内蒙古',
    'Inner Mongolia': '内蒙古', 'Guangxi': '广西', 'Tibet': '西藏', 'Xizang': '西藏',
    'Ningxia': '宁夏', 'Xinjiang': '新疆',
    // 港澳台
    'Hong Kong': '香港', 'Macao': '澳门', 'Taipei': '台北',
    // 新加坡
    'Singapore': '新加坡',
    // 日本都道府县
    'Tokyo': '东京', 'Osaka': '大阪', 'Kyoto': '京都', 'Hokkaido': '北海道',
    'Aichi': '爱知', 'Akita': '秋田', 'Aomori': '青森', 'Chiba': '千叶',
    'Ehime': '爱媛', 'Fukui': '福井', 'Fukuoka': '福冈', 'Fukushima': '福岛',
    'Gifu': '岐阜', 'Gunma': '群马', 'Hiroshima': '广岛', 'Hyogo': '兵库',
    'Ibaraki': '茨城', 'Ishikawa': '石川', 'Iwate': '岩手', 'Kagawa': '香川',
    'Kagoshima': '鹿儿岛', 'Kanagawa': '神奈川', 'Kochi': '高知', 'Kumamoto': '熊本',
    'Mie': '三重', 'Miyagi': '宫城', 'Miyazaki': '宫崎', 'Nagano': '长野',
    'Nagasaki': '长崎', 'Nara': '奈良', 'Niigata': '新潟', 'Oita': '大分',
    'Okayama': '冈山', 'Okinawa': '冲绳', 'Saga': '佐贺', 'Saitama': '埼玉',
    'Shiga': '滋贺', 'Shimane': '岛根', 'Shizuoka': '静冈', 'Tochigi': '栃木',
    'Tokushima': '德岛', 'Tottori': '鸟取', 'Toyama': '富山', 'Wakayama': '和歌山',
    'Yamagata': '山形', 'Yamaguchi': '山口', 'Yamanashi': '山梨',
    // 韩国道/市
    'Seoul': '首尔', 'Busan': '釜山', 'Incheon': '仁川', 'Daegu': '大邱',
    'Gwangju': '光州', 'Daejeon': '大田', 'Ulsan': '蔚山', 'Gyeonggi-do': '京畿道',
    'Gangwon-do': '江原道', 'Chungcheongbuk-do': '忠清北道', 'Chungcheongnam-do': '忠清南道',
    'Jeollabuk-do': '全罗北道', 'Jeollanam-do': '全罗南道', 'Gyeongsangbuk-do': '庆尚北道',
    'Gyeongsangnam-do': '庆尚南道', 'Jeju-do': '济州道',
    // 美国州
    'Alabama': '亚拉巴马', 'Alaska': '阿拉斯加', 'Arizona': '亚利桑那', 'Arkansas': '阿肯色',
    'California': '加利福尼亚', 'Colorado': '科罗拉多', 'Connecticut': '康涅狄格', 'Delaware': '特拉华',
    'Florida': '佛罗里达', 'Georgia': '佐治亚', 'Hawaii': '夏威夷', 'Idaho': '爱达荷',
    'Illinois': '伊利诺伊', 'Indiana': '印第安纳', 'Iowa': '艾奥瓦', 'Kansas': '堪萨斯',
    'Kentucky': '肯塔基', 'Louisiana': '路易斯安那', 'Maine': '缅因', 'Maryland': '马里兰',
    'Massachusetts': '马萨诸塞', 'Michigan': '密歇根', 'Minnesota': '明尼苏达', 'Mississippi': '密西西比',
    'Missouri': '密苏里', 'Montana': '蒙大拿', 'Nebraska': '内布拉斯加', 'Nevada': '内华达',
    'New Hampshire': '新罕布什尔', 'New Jersey': '新泽西', 'New Mexico': '新墨西哥', 'New York': '纽约州',
    'North Carolina': '北卡罗来纳', 'North Dakota': '北达科他', 'Ohio': '俄亥俄', 'Oklahoma': '俄克拉荷马',
    'Oregon': '俄勒冈', 'Pennsylvania': '宾夕法尼亚', 'Rhode Island': '罗得岛', 'South Carolina': '南卡罗来纳',
    'South Dakota': '南达科他', 'Tennessee': '田纳西', 'Texas': '得克萨斯', 'Utah': '犹他',
    'Vermont': '佛蒙特', 'Virginia': '弗吉尼亚', 'Washington': '华盛顿州', 'West Virginia': '西弗吉尼亚',
    'Wisconsin': '威斯康星', 'Wyoming': '怀俄明', 'District of Columbia': '华盛顿哥伦比亚特区',
    // 加拿大省
    'Alberta': '艾伯塔', 'British Columbia': '不列颠哥伦比亚', 'Manitoba': '马尼托巴',
    'New Brunswick': '新不伦瑞克', 'Newfoundland and Labrador': '纽芬兰与拉布拉多', 'Nova Scotia': '新斯科舍',
    'Ontario': '安大略', 'Prince Edward Island': '爱德华王子岛', 'Quebec': '魁北克', 'Saskatchewan': '萨斯喀彻温',
    // 澳大利亚州
    'New South Wales': '新南威尔士', 'Victoria': '维多利亚', 'Queensland': '昆士兰',
    'Western Australia': '西澳大利亚', 'South Australia': '南澳大利亚', 'Tasmania': '塔斯马尼亚',
    'Northern Territory': '北领地', 'Australian Capital Territory': '澳大利亚首都领地',
    // 英国
    'England': '英格兰', 'Scotland': '苏格兰', 'Wales': '威尔士', 'Northern Ireland': '北爱尔兰',
    // 印度邦
    'Maharashtra': '马哈拉施特拉邦', 'Karnataka': '卡纳塔克邦', 'Tamil Nadu': '泰米尔纳德邦',
    'Uttar Pradesh': '北方邦', 'Gujarat': '古吉拉特邦', 'Rajasthan': '拉贾斯坦邦',
    'West Bengal': '西孟加拉邦', 'Kerala': '喀拉拉邦', 'Punjab': '旁遮普邦', 'Haryana': '哈里亚纳邦',
    // 德国州
    'Bavaria': '巴伐利亚', 'North Rhine-Westphalia': '北莱茵-威斯特法伦', 'Baden-Wurttemberg': '巴登-符腾堡',
    'Lower Saxony': '下萨克森', 'Hesse': '黑森', 'Saxony': '萨克森', 'Rhineland-Palatinate': '莱茵兰-普法尔茨',
    // 法国大区
    'Ile-de-France': '法兰西岛', 'Provence-Alpes-Cote d\'Azur': '普罗旺斯-阿尔卑斯-蔚蓝海岸',
    'Auvergne-Rhone-Alpes': '奥弗涅-罗讷-阿尔卑斯', 'Occitanie': '奥克西塔尼',
    // 巴西州
    'Sao Paulo': '圣保罗州', 'Rio de Janeiro': '里约热内卢州', 'Minas Gerais': '米纳斯吉拉斯',
    'Bahia': '巴伊亚', 'Parana': '巴拉那', 'Rio Grande do Sul': '南里奥格兰德',
    // 其他
    'Dubai': '迪拜', 'Abu Dhabi': '阿布扎比', 'Riyadh Region': '利雅得地区',
    'Mecca Region': '麦加地区', 'Eastern Province': '东部省'
};

// 运营商英文到中文映射（常见ISP）
const ISP_MAP_ZH = {
    'China Mobile': '中国移动',
    'China Mobile Communications Group Co., Ltd.': '中国移动通信集团',
    'China Telecom': '中国电信',
    'China Unicom': '中国联通',
    'China United Network Communications': '中国联通',
    'China Tietong': '中国铁通',
    'China Broadcast Network': '中国广电',
    'CERNET': '中国教育和科研计算机网',
    'China Education and Research Network': '中国教育和科研计算机网',
    'Great Wall Broadband': '长城宽带',
    'Dr.Peng': '鹏博士',
    'Alibaba': '阿里巴巴',
    'Tencent': '腾讯',
    'Huawei': '华为',
    'Baidu': '百度',
    'JD.com': '京东',
    'UCloud': '优刻得',
    'QingCloud': '青云',
    'ChinaCache': '蓝汛',
    'Wangsu': '网宿科技',
    'BaishanCloud': '白山云',
    'AWS': '亚马逊云',
    'Amazon': '亚马逊',
    'Google': '谷歌',
    'Microsoft': '微软',
    'Cloudflare': 'Cloudflare',
    'Oracle': '甲骨文',
    'DigitalOcean': 'DigitalOcean',
    'Linode': 'Linode',
    'Vultr': 'Vultr',
    'Hetzner': 'Hetzner',
    'OVH': 'OVH',
    'Tencent Cloud': '腾讯云',
    'Alibaba Cloud': '阿里云',
    'Huawei Cloud': '华为云',
    'Baidu Cloud': '百度云',
    'JD Cloud': '京东云',
    'Ucloud': '优刻得',
    'China Telecom Guangdong': '中国电信广东',
    'China Telecom Beijing': '中国电信北京',
    'China Telecom Shanghai': '中国电信上海',
    'China Unicom Beijing': '中国联通北京',
    'China Mobile Guangdong': '中国移动广东',
    'Chunghwa Telecom': '中华电信',
    'HKT': '香港电讯',
    'HKBN': '香港宽频',
    'PCCW': '电讯盈科',
    'NTT': '日本电信电话',
    'KDDI': 'KDDI',
    'SoftBank': '软银',
    'SK Broadband': 'SK宽带',
    'KT': '韩国电信',
    'LG Uplus': 'LG U+',
    'Rostelecom': '俄罗斯电信',
    'Beeline': 'Beeline',
    'MTS': 'MTS',
    'MegaFon': 'MegaFon',
    'Comcast': '康卡斯特',
    'AT&T': 'AT&T',
    'Verizon': '威瑞森',
    'Spectrum': 'Spectrum',
    'T-Mobile': 'T-Mobile',
    'Sprint': 'Sprint',
    'Charter': 'Charter',
    'Cox': 'Cox',
    'CenturyLink': 'CenturyLink',
    'Frontier': 'Frontier',
    'BT': '英国电信',
    'Virgin Media': '维珍传媒',
    'TalkTalk': 'TalkTalk',
    'Sky Broadband': 'Sky宽带',
    'Orange': 'Orange',
    'Free': 'Free',
    'SFR': 'SFR',
    'Bouygues Telecom': '布依格电信',
    'Deutsche Telekom': '德国电信',
    'Vodafone': '沃达丰',
    'O2': 'O2',
    'Telefonica': '西班牙电信',
    'TIM': '意大利电信',
    'Fastweb': 'Fastweb',
    'Wind Tre': 'Wind Tre',
    'Telstra': '澳洲电信',
    'Optus': 'Optus',
    'TPG': 'TPG',
    'SingTel': '新加坡电信',
    'StarHub': '星和',
    'M1': 'M1',
    'Reliance Jio': '信实Jio',
    'Airtel': 'Airtel',
    'BSNL': 'BSNL',
    'Viettel': 'Viettel',
    'FPT Telecom': 'FPT电信',
    'True Internet': 'True互联网',
    'AIS': 'AIS',
    'DTAC': 'DTAC',
    'Telkom Indonesia': '印尼电信',
    'Indosat': 'Indosat',
    'XL Axiata': 'XL Axiata',
    'Maxis': 'Maxis',
    'Celcom': 'Celcom',
    'Digi': 'Digi',
    'U Mobile': 'U Mobile',
    'PLDT': 'PLDT',
    'Globe': 'Globe',
    'Smart': 'Smart',
    'TM': 'TM',
    'Axiata': 'Axiata',
    'Etisalat': 'Etisalat',
    'du': 'du',
    'STC': 'STC',
    'Zain': 'Zain',
    'Mobily': 'Mobily',
    'Turk Telekom': '土耳其电信',
    'Turkcell': 'Turkcell',
    'Vodafone Turkey': '沃达丰土耳其',
    'Bezeq': 'Bezeq',
    'Hot': 'Hot',
    'Partner': 'Partner',
    'Telecom Egypt': '埃及电信',
    'Vodafone Egypt': '沃达丰埃及',
    'Orange Egypt': 'Orange埃及',
    'Etisalat Egypt': 'Etisalat埃及',
    'Safaricom': 'Safaricom',
    'MTN': 'MTN',
    'Airtel Africa': 'Airtel非洲',
    'Telkom': 'Telkom',
    'Cell C': 'Cell C',
    'Rain': 'Rain',
    'Claro': 'Claro',
    'Vivo': 'Vivo',
    'Oi': 'Oi',
    'TIM Brazil': 'TIM巴西',
    'Movistar': 'Movistar',
    'Personal': 'Personal',
    'Claro Argentina': 'Claro阿根廷',
    'Entel': 'Entel',
    'Movistar Chile': 'Movistar智利',
    'Tigo': 'Tigo',
    'Movistar Colombia': 'Movistar哥伦比亚',
    'Claro Colombia': 'Claro哥伦比亚',
    'Telcel': 'Telcel',
    'AT&T Mexico': 'AT&T墨西哥',
    'Movistar Mexico': 'Movistar墨西哥'
};

// 时区英文到中文映射（常见时区）
const TIMEZONE_MAP_ZH = {
    // 中国及周边
    'Asia/Shanghai': '亚洲/上海（中国标准时间）',
    'Asia/Beijing': '亚洲/北京（中国标准时间）',
    'Asia/Chongqing': '亚洲/重庆（中国标准时间）',
    'Asia/Urumqi': '亚洲/乌鲁木齐（中国标准时间）',
    'Asia/Hong_Kong': '亚洲/香港（香港时间）',
    'Asia/Macau': '亚洲/澳门（澳门时间）',
    'Asia/Taipei': '亚洲/台北（台湾时间）',
    // 东亚
    'Asia/Tokyo': '亚洲/东京（日本标准时间）',
    'Asia/Osaka': '亚洲/大阪（日本标准时间）',
    'Asia/Seoul': '亚洲/首尔（韩国标准时间）',
    'Asia/Pyongyang': '亚洲/平壤（朝鲜时间）',
    // 东南亚
    'Asia/Singapore': '亚洲/新加坡（新加坡时间）',
    'Asia/Kuala_Lumpur': '亚洲/吉隆坡（马来西亚时间）',
    'Asia/Bangkok': '亚洲/曼谷（中南半岛时间）',
    'Asia/Ho_Chi_Minh': '亚洲/胡志明市（中南半岛时间）',
    'Asia/Jakarta': '亚洲/雅加达（印尼西部时间）',
    'Asia/Makassar': '亚洲/望加锡（印尼中部时间）',
    'Asia/Jayapura': '亚洲/查亚普拉（印尼东部时间）',
    'Asia/Manila': '亚洲/马尼拉（菲律宾时间）',
    'Asia/Hanoi': '亚洲/河内（中南半岛时间）',
    'Asia/Yangon': '亚洲/仰光（缅甸时间）',
    'Asia/Phnom_Penh': '亚洲/金边（中南半岛时间）',
    'Asia/Vientiane': '亚洲/万象（中南半岛时间）',
    'Asia/Brunei': '亚洲/文莱（文莱时间）',
    'Asia/Dili': '亚洲/帝力（东帝汶时间）',
    // 南亚
    'Asia/Kolkata': '亚洲/加尔各答（印度标准时间）',
    'Asia/Delhi': '亚洲/德里（印度标准时间）',
    'Asia/Mumbai': '亚洲/孟买（印度标准时间）',
    'Asia/Karachi': '亚洲/卡拉奇（巴基斯坦时间）',
    'Asia/Dhaka': '亚洲/达卡（孟加拉国时间）',
    'Asia/Colombo': '亚洲/科伦坡（斯里兰卡时间）',
    'Asia/Kathmandu': '亚洲/加德满都（尼泊尔时间）',
    'Asia/Thimphu': '亚洲/廷布（不丹时间）',
    'Asia/Male': '亚洲/马累（马尔代夫时间）',
    // 中亚
    'Asia/Tashkent': '亚洲/塔什干（乌兹别克斯坦时间）',
    'Asia/Almaty': '亚洲/阿拉木图（哈萨克斯坦时间）',
    'Asia/Aqtau': '亚洲/阿克套（哈萨克斯坦时间）',
    'Asia/Aqtobe': '亚洲/阿克托别（哈萨克斯坦时间）',
    'Asia/Atyrau': '亚洲/阿特劳（哈萨克斯坦时间）',
    'Asia/Oral': '亚洲/乌拉尔（哈萨克斯坦时间）',
    'Asia/Qyzylorda': '亚洲/克孜勒奥尔达（哈萨克斯坦时间）',
    'Asia/Qostanay': '亚洲/库斯塔奈（哈萨克斯坦时间）',
    'Asia/Dushanbe': '亚洲/杜尚别（塔吉克斯坦时间）',
    'Asia/Ashgabat': '亚洲/阿什哈巴德（土库曼斯坦时间）',
    'Asia/Bishkek': '亚洲/比什凯克（吉尔吉斯斯坦时间）',
    // 西亚/中东
    'Asia/Dubai': '亚洲/迪拜（海湾标准时间）',
    'Asia/Abu_Dhabi': '亚洲/阿布扎比（海湾标准时间）',
    'Asia/Riyadh': '亚洲/利雅得（阿拉伯标准时间）',
    'Asia/Tehran': '亚洲/德黑兰（伊朗时间）',
    'Asia/Baghdad': '亚洲/巴格达（阿拉伯标准时间）',
    'Asia/Kuwait': '亚洲/科威特（阿拉伯标准时间）',
    'Asia/Qatar': '亚洲/卡塔尔（海湾标准时间）',
    'Asia/Bahrain': '亚洲/巴林（海湾标准时间）',
    'Asia/Muscat': '亚洲/马斯喀特（海湾标准时间）',
    'Asia/Jerusalem': '亚洲/耶路撒冷（以色列时间）',
    'Asia/Amman': '亚洲/安曼（东欧时间）',
    'Asia/Damascus': '亚洲/大马士革（东欧时间）',
    'Asia/Beirut': '亚洲/贝鲁特（东欧时间）',
    'Asia/Istanbul': '亚洲/伊斯坦布尔（土耳其时间）',
    'Asia/Ankara': '亚洲/安卡拉（土耳其时间）',
    'Asia/Tbilisi': '亚洲/第比利斯（格鲁吉亚时间）',
    'Asia/Yerevan': '亚洲/埃里温（亚美尼亚时间）',
    'Asia/Baku': '亚洲/巴库（阿塞拜疆时间）',
    'Asia/Kabul': '亚洲/喀布尔（阿富汗时间）',
    // 欧洲
    'Europe/London': '欧洲/伦敦（格林尼治时间）',
    'Europe/Paris': '欧洲/巴黎（中欧时间）',
    'Europe/Berlin': '欧洲/柏林（中欧时间）',
    'Europe/Madrid': '欧洲/马德里（中欧时间）',
    'Europe/Rome': '欧洲/罗马（中欧时间）',
    'Europe/Amsterdam': '欧洲/阿姆斯特丹（中欧时间）',
    'Europe/Brussels': '欧洲/布鲁塞尔（中欧时间）',
    'Europe/Vienna': '欧洲/维也纳（中欧时间）',
    'Europe/Zurich': '欧洲/苏黎世（中欧时间）',
    'Europe/Stockholm': '欧洲/斯德哥尔摩（中欧时间）',
    'Europe/Oslo': '欧洲/奥斯陆（中欧时间）',
    'Europe/Copenhagen': '欧洲/哥本哈根（中欧时间）',
    'Europe/Helsinki': '欧洲/赫尔辛基（东欧时间）',
    'Europe/Moscow': '欧洲/莫斯科（莫斯科时间）',
    'Europe/St_Petersburg': '欧洲/圣彼得堡（莫斯科时间）',
    'Europe/Kiev': '欧洲/基辅（东欧时间）',
    'Europe/Kyiv': '欧洲/基辅（东欧时间）',
    'Europe/Warsaw': '欧洲/华沙（中欧时间）',
    'Europe/Prague': '欧洲/布拉格（中欧时间）',
    'Europe/Budapest': '欧洲/布达佩斯（中欧时间）',
    'Europe/Bucharest': '欧洲/布加勒斯特（东欧时间）',
    'Europe/Sofia': '欧洲/索非亚（东欧时间）',
    'Europe/Athens': '欧洲/雅典（东欧时间）',
    'Europe/Dublin': '欧洲/都柏林（格林尼治时间）',
    'Europe/Lisbon': '欧洲/里斯本（西欧时间）',
    'Europe/Minsk': '欧洲/明斯克（莫斯科时间）',
    'Europe/Riga': '欧洲/里加（东欧时间）',
    'Europe/Tallinn': '欧洲/塔林（东欧时间）',
    'Europe/Vilnius': '欧洲/维尔纽斯（东欧时间）',
    'Europe/Istanbul': '欧洲/伊斯坦布尔（土耳其时间）',
    'Europe/Belgrade': '欧洲/贝尔格莱德（中欧时间）',
    'Europe/Zagreb': '欧洲/萨格勒布（中欧时间）',
    'Europe/Sarajevo': '欧洲/萨拉热窝（中欧时间）',
    'Europe/Skopje': '欧洲/斯科普里（中欧时间）',
    'Europe/Tirane': '欧洲/地拉那（中欧时间）',
    'Europe/Podgorica': '欧洲/波德戈里察（中欧时间）',
    'Europe/Ljubljana': '欧洲/卢布尔雅那（中欧时间）',
    'Europe/Bratislava': '欧洲/布拉迪斯拉发（中欧时间）',
    'Europe/Chisinau': '欧洲/基希讷乌（东欧时间）',
    'Europe/Tiraspol': '欧洲/蒂拉斯波尔（东欧时间）',
    'Europe/Kaliningrad': '欧洲/加里宁格勒（加里宁格勒时间）',
    'Europe/Samara': '欧洲/萨马拉（萨马拉时间）',
    'Europe/Volgograd': '欧洲/伏尔加格勒（莫斯科时间）',
    'Europe/Yekaterinburg': '欧洲/叶卡捷琳堡（叶卡捷琳堡时间）',
    'Europe/Omsk': '欧洲/鄂木斯克（鄂木斯克时间）',
    'Europe/Novosibirsk': '欧洲/新西伯利亚（新西伯利亚时间）',
    'Europe/Krasnoyarsk': '欧洲/克拉斯诺亚尔斯克（克拉斯诺亚尔斯克时间）',
    'Europe/Irkutsk': '欧洲/伊尔库茨克（伊尔库茨克时间）',
    'Europe/Yakutsk': '欧洲/雅库茨克（雅库茨克时间）',
    'Europe/Vladivostok': '欧洲/符拉迪沃斯托克（海参崴时间）',
    'Europe/Magadan': '欧洲/马加丹（马加丹时间）',
    'Europe/Sakhalin': '欧洲/库页岛（库页岛时间）',
    'Europe/Kamchatka': '欧洲/堪察加（堪察加时间）',
    'Europe/Andorra': '欧洲/安道尔（中欧时间）',
    'Europe/Monaco': '欧洲/摩纳哥（中欧时间）',
    'Europe/Vatican': '欧洲/梵蒂冈（中欧时间）',
    'Europe/San_Marino': '欧洲/圣马力诺（中欧时间）',
    'Europe/Luxembourg': '欧洲/卢森堡（中欧时间）',
    'Europe/Malta': '欧洲/马耳他（中欧时间）',
    'Europe/Nicosia': '欧洲/尼科西亚（东欧时间）',
    'Europe/Gibraltar': '欧洲/直布罗陀（中欧时间）',
    // 美洲
    'America/New_York': '美洲/纽约（北美东部时间）',
    'America/Los_Angeles': '美洲/洛杉矶（北美太平洋时间）',
    'America/Chicago': '美洲/芝加哥（北美中部时间）',
    'America/Denver': '美洲/丹佛（北美山地时间）',
    'America/Phoenix': '美洲/凤凰城（北美山地时间）',
    'America/Anchorage': '美洲/安克雷奇（阿拉斯加时间）',
    'America/Honolulu': '美洲/火奴鲁鲁（夏威夷时间）',
    'America/Toronto': '美洲/多伦多（北美东部时间）',
    'America/Vancouver': '美洲/温哥华（北美太平洋时间）',
    'America/Montreal': '美洲/蒙特利尔（北美东部时间）',
    'America/Edmonton': '美洲/埃德蒙顿（北美山地时间）',
    'America/Winnipeg': '美洲/温尼伯（北美中部时间）',
    'America/Halifax': '美洲/哈利法克斯（大西洋时间）',
    'America/St_Johns': '美洲/圣约翰斯（纽芬兰时间）',
    'America/Mexico_City': '美洲/墨西哥城（墨西哥中部时间）',
    'America/Guadalajara': '美洲/瓜达拉哈拉（墨西哥中部时间）',
    'America/Monterrey': '美洲/蒙特雷（墨西哥中部时间）',
    'America/Tijuana': '美洲/蒂华纳（北美太平洋时间）',
    'America/Cancun': '美洲/坎昆（北美东部时间）',
    'America/Bogota': '美洲/波哥大（哥伦比亚时间）',
    'America/Lima': '美洲/利马（秘鲁时间）',
    'America/Quito': '美洲/基多（厄瓜多尔时间）',
    'America/Caracas': '美洲/加拉加斯（委内瑞拉时间）',
    'America/La_Paz': '美洲/拉巴斯（玻利维亚时间）',
    'America/Santiago': '美洲/圣地亚哥（智利时间）',
    'America/Asuncion': '美洲/亚松森（巴拉圭时间）',
    'America/Montevideo': '美洲/蒙得维的亚（乌拉圭时间）',
    'America/Buenos_Aires': '美洲/布宜诺斯艾利斯（阿根廷时间）',
    'America/Cordoba': '美洲/科尔多瓦（阿根廷时间）',
    'America/Rosario': '美洲/罗萨里奥（阿根廷时间）',
    'America/Sao_Paulo': '美洲/圣保罗（巴西利亚时间）',
    'America/Rio_de_Janeiro': '美洲/里约热内卢（巴西利亚时间）',
    'America/Recife': '美洲/累西腓（巴西利亚时间）',
    'America/Fortaleza': '美洲/福塔雷萨（巴西利亚时间）',
    'America/Salvador': '美洲/萨尔瓦多（巴西利亚时间）',
    'America/Bahia': '美洲/巴伊亚（巴西利亚时间）',
    'America/Campo_Grande': '美洲/大坎普（亚马逊时间）',
    'America/Cuiaba': '美洲/库亚巴（亚马逊时间）',
    'America/Manaus': '美洲/马瑙斯（亚马逊时间）',
    'America/Belem': '美洲/贝伦（巴西利亚时间）',
    'America/Porto_Velho': '美洲/韦柳港（亚马逊时间）',
    'America/Boa_Vista': '美洲/博阿维斯塔（亚马逊时间）',
    'America/Araguaina': '美洲/阿拉瓜伊纳（巴西利亚时间）',
    'America/Maceio': '美洲/马塞约（巴西利亚时间）',
    'America/Noronha': '美洲/费尔南多-迪诺罗尼亚（费尔南多时间）',
    'America/Havana': '美洲/哈瓦那（古巴时间）',
    'America/Jamaica': '美洲/牙买加（北美东部时间）',
    'America/Port_of_Spain': '美洲/西班牙港（大西洋时间）',
    'America/Barbados': '美洲/巴巴多斯（大西洋时间）',
    'America/Puerto_Rico': '美洲/波多黎各（大西洋时间）',
    'America/Santo_Domingo': '美洲/圣多明各（大西洋时间）',
    'America/Guatemala': '美洲/危地马拉（北美中部时间）',
    'America/Tegucigalpa': '美洲/特古西加尔巴（北美中部时间）',
    'America/Managua': '美洲/马那瓜（北美中部时间）',
    'America/San_Jose': '美洲/圣何塞（北美中部时间）',
    'America/Panama': '美洲/巴拿马（北美东部时间）',
    // 大洋洲
    'Australia/Sydney': '大洋洲/悉尼（澳大利亚东部时间）',
    'Australia/Melbourne': '大洋洲/墨尔本（澳大利亚东部时间）',
    'Australia/Brisbane': '大洋洲/布里斯班（澳大利亚东部时间）',
    'Australia/Perth': '大洋洲/珀斯（澳大利亚西部时间）',
    'Australia/Adelaide': '大洋洲/阿德莱德（澳大利亚中部时间）',
    'Australia/Darwin': '大洋洲/达尔文（澳大利亚中部时间）',
    'Australia/Hobart': '大洋洲/霍巴特（澳大利亚东部时间）',
    'Australia/Canberra': '大洋洲/堪培拉（澳大利亚东部时间）',
    'Australia/Lord_Howe': '大洋洲/豪勋爵岛（豪勋爵岛时间）',
    'Pacific/Auckland': '太平洋/奥克兰（新西兰时间）',
    'Pacific/Wellington': '太平洋/惠灵顿（新西兰时间）',
    'Pacific/Chatham': '太平洋/查塔姆（查塔姆时间）',
    'Pacific/Fiji': '太平洋/斐济（斐济时间）',
    'Pacific/Guam': '太平洋/关岛（查莫罗时间）',
    'Pacific/Honolulu': '太平洋/火奴鲁鲁（夏威夷时间）',
    'Pacific/Midway': '太平洋/中途岛（中途岛时间）',
    'Pacific/Noumea': '太平洋/努美阿（新喀里多尼亚时间）',
    'Pacific/Port_Moresby': '太平洋/莫尔兹比港（巴布亚新几内亚时间）',
    'Pacific/Tahiti': '太平洋/塔希提（塔希提时间）',
    'Pacific/Samoa': '太平洋/萨摩亚（萨摩亚时间）',
    'Pacific/Tongatapu': '太平洋/汤加塔布（汤加时间）',
    // 非洲
    'Africa/Cairo': '非洲/开罗（东欧时间）',
    'Africa/Johannesburg': '非洲/约翰内斯堡（南非标准时间）',
    'Africa/Lagos': '非洲/拉各斯（西非时间）',
    'Africa/Nairobi': '非洲/内罗毕（东非时间）',
    'Africa/Casablanca': '非洲/卡萨布兰卡（西欧时间）',
    'Africa/Tunis': '非洲/突尼斯（中欧时间）',
    'Africa/Algiers': '非洲/阿尔及尔（中欧时间）',
    'Africa/Tripoli': '非洲/的黎波里（东欧时间）',
    'Africa/Khartoum': '非洲/喀土穆（中非时间）',
    'Africa/Addis_Ababa': '非洲/亚的斯亚贝巴（东非时间）',
    'Africa/Dar_es_Salaam': '非洲/达累斯萨拉姆（东非时间）',
    'Africa/Kampala': '非洲/坎帕拉（东非时间）',
    'Africa/Kigali': '非洲/基加利（东非时间）',
    'Africa/Bujumbura': '非洲/布琼布拉（东非时间）',
    'Africa/Djibouti': '非洲/吉布提（东非时间）',
    'Africa/Mogadishu': '非洲/摩加迪沙（东非时间）',
    'Africa/Accra': '非洲/阿克拉（格林尼治时间）',
    'Africa/Dakar': '非洲/达喀尔（格林尼治时间）',
    'Africa/Abidjan': '非洲/阿比让（格林尼治时间）',
    'Africa/Lome': '非洲/洛美（格林尼治时间）',
    'Africa/Nouakchott': '非洲/努瓦克肖特（格林尼治时间）',
    'Africa/Bamako': '非洲/巴马科（格林尼治时间）',
    'Africa/Ouagadougou': '非洲/瓦加杜古（格林尼治时间）',
    'Africa/Conakry': '非洲/科纳克里（格林尼治时间）',
    'Africa/Freetown': '非洲/弗里敦（格林尼治时间）',
    'Africa/Monrovia': '非洲/蒙罗维亚（格林尼治时间）',
    'Africa/Banjul': '非洲/班珠尔（格林尼治时间）',
    'Africa/Bissau': '非洲/比绍（格林尼治时间）',
    'Africa/Luanda': '非洲/罗安达（西非时间）',
    'Africa/Kinshasa': '非洲/金沙萨（西非时间）',
    'Africa/Brazzaville': '非洲/布拉柴维尔（西非时间）',
    'Africa/Libreville': '非洲/利伯维尔（西非时间）',
    'Africa/Malabo': '非洲/马拉博（西非时间）',
    'Africa/Niamey': '非洲/尼亚美（西非时间）',
    'Africa/Lagos': '非洲/拉各斯（西非时间）',
    'Africa/Porto-Novo': '非洲/波多诺伏（西非时间）',
    'Africa/Lome': '非洲/洛美（西非时间）',
    'Africa/Windhoek': '非洲/温得和克（中非时间）',
    'Africa/Gaborone': '非洲/哈博罗内（中非时间）',
    'Africa/Harare': '非洲/哈拉雷（中非时间）',
    'Africa/Lusaka': '非洲/卢萨卡（中非时间）',
    'Africa/Maputo': '非洲/马普托（中非时间）',
    'Africa/Blantyre': '非洲/布兰太尔（中非时间）',
    'Africa/Kigali': '非洲/基加利（中非时间）',
    // 格林尼治/UTC
    'UTC': '协调世界时（UTC）',
    'Etc/UTC': '协调世界时（UTC）',
    'Etc/GMT': '格林尼治时间（GMT）',
    'GMT': '格林尼治时间（GMT）',
    'Greenwich': '格林尼治时间（GMT）',
    // 其他
    'Atlantic/Reykjavik': '大西洋/雷克雅未克（格林尼治时间）',
    'Atlantic/Azores': '大西洋/亚速尔（亚速尔时间）',
    'Atlantic/Cape_Verde': '大西洋/佛得角（佛得角时间）',
    'Atlantic/South_Georgia': '大西洋/南乔治亚（南乔治亚时间）',
    'Indian/Maldives': '印度洋/马尔代夫（马尔代夫时间）',
    'Indian/Mauritius': '印度洋/毛里求斯（毛里求斯时间）',
    'Indian/Reunion': '印度洋/留尼汪（留尼汪时间）',
    'Indian/Mahe': '印度洋/马埃（塞舌尔时间）'
};

// 多语言翻译配置
const TRANSLATIONS = {
    zh: {
        title: 'IP归属地查询工具 - 快速查询IP地址归属地信息',
        desc: '免费在线IP归属地查询工具，支持查询任意IP地址的国家、地区、城市、运营商等详细信息。',
        h1: 'IP归属地查询',
        subtitle: '查询IP地址的详细归属地信息',
        placeholder: '请输入IP地址（如：8.8.8.8）',
        searchBtn: '查询',
        myIPBtn: '查询我的IP',
        loading: '正在查询IP信息...',
        inputError: '请输入IP地址',
        formatError: '请输入有效的IP地址格式（如：8.8.8.8）',
        networkError: '网络请求失败或IP地址无效',
        bogonError: '查询失败，请检查IP地址是否正确',
        queryFailed: '查询失败',
        privateIP: '内网IP',
        publicIP: '公网IP',
        country: '国家/地区',
        region: '省份/州',
        city: '城市',
        zip: '邮编',
        isp: '运营商',
        org: '组织',
        location: '经纬度',
        timezone: '时区',
        mapTitle: '地理位置',
        mapView: '在地图上查看：',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: '暂无地理位置信息',
        instructionsTitle: '使用说明',
        instructions: [
            '在输入框中输入要查询的IP地址（支持IPv4格式）',
            '点击"查询"按钮获取该IP的归属地信息',
            '点击"查询我的IP"按钮可以快速查询您当前的IP地址信息',
            '查询结果包括：国家、地区、城市、运营商、经纬度、时区等详细信息',
            '支持查看IP地理位置的地图链接'
        ],
        apiNotice: '本工具使用免费API服务，查询结果仅供参考。',
        dataSource: '数据来源',
        footer: 'IP归属地查询工具',
        about: '关于我们',
        privacy: '隐私政策',
        home: '首页',
        aboutPage: '关于',
        cookieTitle: 'Cookie 使用声明',
        cookieText: '我们使用 Cookie 和类似技术来改善您的浏览体验、分析网站流量并投放个性化广告。继续使用本网站即表示您同意我们的',
        cookiePrivacy: '隐私政策',
        cookieAccept: '同意',
        adLabel: 'Advertisement'
    },
    en: {
        title: 'IP Lookup Tool - Check IP Address Location Instantly',
        desc: 'Free online IP geolocation lookup tool. Find country, region, city, ISP and more for any IP address.',
        h1: 'IP Geolocation Lookup',
        subtitle: 'Check detailed location information for any IP address',
        placeholder: 'Enter IP address (e.g. 8.8.8.8)',
        searchBtn: 'Lookup',
        myIPBtn: 'My IP Address',
        loading: 'Looking up IP information...',
        inputError: 'Please enter an IP address',
        formatError: 'Please enter a valid IPv4 address (e.g. 8.8.8.8)',
        networkError: 'Network request failed or invalid IP address',
        bogonError: 'Lookup failed, please check the IP address',
        queryFailed: 'Lookup failed',
        privateIP: 'Private IP',
        publicIP: 'Public IP',
        country: 'Country / Region',
        region: 'Region / State',
        city: 'City',
        zip: 'Postal Code',
        isp: 'ISP',
        org: 'Organization',
        location: 'Coordinates',
        timezone: 'Timezone',
        mapTitle: 'Geolocation',
        mapView: 'View on map:',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: 'No location data available',
        instructionsTitle: 'How to Use',
        instructions: [
            'Enter an IP address in the input field (IPv4 format supported)',
            'Click the "Lookup" button to get geolocation details',
            'Click "My IP Address" to quickly check your current public IP',
            'Results include: country, region, city, ISP, coordinates, timezone and more',
            'Map links to Google Maps and OpenStreetMap are provided'
        ],
        apiNotice: 'This tool uses a free API service. Results are for reference only.',
        dataSource: 'Data source',
        footer: 'IP Geolocation Lookup Tool',
        about: 'About Us',
        privacy: 'Privacy Policy',
        home: 'Home',
        aboutPage: 'About',
        cookieTitle: 'Cookie Consent',
        cookieText: 'We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and serve personalized advertisements. By continuing to use this site, you agree to our',
        cookiePrivacy: 'Privacy Policy',
        cookieAccept: 'Accept',
        adLabel: 'Advertisement'
    },
    ja: {
        title: 'IPアドレス照会ツール - IPの位置情報を即座に確認',
        desc: '無料のオンラインIPジオロケーション照会ツール。任意のIPアドレスの国、地域、都市、ISPなどを検索できます。',
        h1: 'IP位置情報照会',
        subtitle: 'IPアドレスの詳細な位置情報を確認',
        placeholder: 'IPアドレスを入力（例: 8.8.8.8）',
        searchBtn: '照会',
        myIPBtn: '自分のIP',
        loading: 'IP情報を照会中...',
        inputError: 'IPアドレスを入力してください',
        formatError: '有効なIPv4アドレスを入力してください（例: 8.8.8.8）',
        networkError: 'ネットワーク要求が失敗しました、または無効なIPアドレスです',
        bogonError: '照会に失敗しました。IPアドレスを確認してください',
        queryFailed: '照会に失敗しました',
        privateIP: 'プライベートIP',
        publicIP: 'パブリックIP',
        country: '国 / 地域',
        region: '地域 / 州',
        city: '都市',
        zip: '郵便番号',
        isp: 'ISP',
        org: '組織',
        location: '座標',
        timezone: 'タイムゾーン',
        mapTitle: '位置情報',
        mapView: '地図で見る:',
        googleMaps: 'Google マップ',
        openStreetMap: 'OpenStreetMap',
        noLocation: '位置情報がありません',
        instructionsTitle: '使い方',
        instructions: [
            '検索フィールドにIPアドレスを入力してください（IPv4形式対応）',
            '「照会」ボタンをクリックして位置情報を取得',
            '「自分のIP」をクリックして現在のパブリックIPを確認',
            '結果には: 国、地域、都市、ISP、座標、タイムゾーンなどが含まれます',
            'GoogleマップとOpenStreetMapへのリンクを提供'
        ],
        apiNotice: 'このツールは無料APIサービスを使用しています。結果は参考用です。',
        dataSource: 'データ提供元',
        footer: 'IP位置情報照会ツール',
        about: '概要',
        privacy: 'プライバシーポリシー',
        home: 'ホーム',
        aboutPage: '概要',
        cookieTitle: 'Cookie の同意',
        cookieText: '当社は、閲覧体験の向上、サイトトラフィックの分析、パーソナライズされた広告の配信のために、Cookieおよび類似の技術を使用しています。このサイトを引き続き使用することにより、当社の',
        cookiePrivacy: 'プライバシーポリシー',
        cookieAccept: '同意する',
        adLabel: '広告'
    },
    ko: {
        title: 'IP 주소 조회 도구 - IP 위치 정보를 즉시 확인',
        desc: '무료 온라인 IP 지리 위치 조회 도구. 모든 IP 주소의 국가, 지역, 도시, ISP 등을 찾아보세요.',
        h1: 'IP 지리 위치 조회',
        subtitle: '모든 IP 주소의 상세 위치 정보 확인',
        placeholder: 'IP 주소 입력 (예: 8.8.8.8)',
        searchBtn: '조회',
        myIPBtn: '내 IP 주소',
        loading: 'IP 정보 조회 중...',
        inputError: 'IP 주소를 입력하세요',
        formatError: '유효한 IPv4 주소를 입력하세요 (예: 8.8.8.8)',
        networkError: '네트워크 요청 실패 또는 잘못된 IP 주소',
        bogonError: '조회에 실패했습니다. IP 주소를 확인하세요',
        queryFailed: '조회 실패',
        privateIP: '사설 IP',
        publicIP: '공인 IP',
        country: '국가 / 지역',
        region: '지역 / 주',
        city: '도시',
        zip: '우편번호',
        isp: 'ISP',
        org: '조직',
        location: '좌표',
        timezone: '시간대',
        mapTitle: '위치 정보',
        mapView: '지도에서 보기:',
        googleMaps: 'Google 지도',
        openStreetMap: 'OpenStreetMap',
        noLocation: '위치 데이터가 없습니다',
        instructionsTitle: '사용 방법',
        instructions: [
            '입력 필드에 IP 주소를 입력하세요 (IPv4 형식 지원)',
            '「조회」 버튼을 클릭하여 위치 정보를 가져오세요',
            '「내 IP 주소」를 클릭하여 현재 공인 IP를 빠르게 확인하세요',
            '결과에는 국가, 지역, 도시, ISP, 좌표, 시간대 등이 포함됩니다',
            'Google 지도 및 OpenStreetMap 링크가 제공됩니다'
        ],
        apiNotice: '이 도구는 무료 API 서비스를 사용합니다. 결과는 참고용입니다.',
        dataSource: '데이터 출처',
        footer: 'IP 지리 위치 조회 도구',
        about: '소개',
        privacy: '개인정보처리방침',
        home: '홈',
        aboutPage: '소개',
        cookieTitle: '쿠키 동의',
        cookieText: '당사는 귀하의 브라우징 경험을 개선하고, 사이트 트래픽을 분석하며, 맞춤형 광고를 제공하기 위해 쿠키 및 유사 기술을 사용합니다. 이 사이트를 계속 사용함으로써 귀하는 당사의',
        cookiePrivacy: '개인정보처리방침',
        cookieAccept: '동의',
        adLabel: '광고'
    },
    ru: {
        title: 'Инструмент поиска IP - Проверка местоположения IP-адреса',
        desc: 'Бесплатный онлайн-инструмент геолокации IP. Найдите страну, регион, город, провайдера и многое другое для любого IP-адреса.',
        h1: 'Поиск геолокации IP',
        subtitle: 'Проверьте подробную информацию о местоположении любого IP-адреса',
        placeholder: 'Введите IP-адрес (например, 8.8.8.8)',
        searchBtn: 'Поиск',
        myIPBtn: 'Мой IP-адрес',
        loading: 'Поиск информации об IP...',
        inputError: 'Введите IP-адрес',
        formatError: 'Введите действительный IPv4-адрес (например, 8.8.8.8)',
        networkError: 'Сетевой запрос не выполнен или неверный IP-адрес',
        bogonError: 'Поиск не удался, проверьте IP-адрес',
        queryFailed: 'Поиск не удался',
        privateIP: 'Частный IP',
        publicIP: 'Публичный IP',
        country: 'Страна / Регион',
        region: 'Регион / Штат',
        city: 'Город',
        zip: 'Почтовый индекс',
        isp: 'ISP',
        org: 'Организация',
        location: 'Координаты',
        timezone: 'Часовой пояс',
        mapTitle: 'Геолокация',
        mapView: 'Посмотреть на карте:',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: 'Данные о местоположении отсутствуют',
        instructionsTitle: 'Как использовать',
        instructions: [
            'Введите IP-адрес в поле ввода (поддерживается формат IPv4)',
            'Нажмите кнопку "Поиск", чтобы получить данные о геолокации',
            'Нажмите "Мой IP-адрес", чтобы быстро проверить текущий публичный IP',
            'Результаты включают: страну, регион, город, провайдера, координаты, часовой пояс и многое другое',
            'Предоставлены ссылки на Google Maps и OpenStreetMap'
        ],
        apiNotice: 'Этот инструмент использует бесплатный API-сервис. Результаты предназначены только для справки.',
        dataSource: 'Источник данных',
        footer: 'Инструмент поиска геолокации IP',
        about: 'О нас',
        privacy: 'Политика конфиденциальности',
        home: 'Главная',
        aboutPage: 'О нас',
        cookieTitle: 'Согласие на использование Cookie',
        cookieText: 'Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта просмотра, анализа трафика сайта и показа персонализированной рекламы. Продолжая использовать этот сайт, вы соглашаетесь с нашей',
        cookiePrivacy: 'Политикой конфиденциальности',
        cookieAccept: 'Принять',
        adLabel: 'Реклама'
    }
};

// 页面元素
const elements = {
    ipInput: null,
    loading: null,
    error: null,
    ipInfo: null,
    searchBtn: null
};

// 获取当前页面语言
function getPageLang() {
    const htmlLang = document.documentElement.lang || 'zh';
    const supported = ['zh', 'en', 'ja', 'ko', 'ru'];
    return supported.includes(htmlLang) ? htmlLang : 'zh';
}

// 获取翻译文本
function t(key) {
    const lang = getPageLang();
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面元素
    elements.ipInput = document.getElementById('ipInput');
    elements.loading = document.getElementById('loading');
    elements.error = document.getElementById('error');
    elements.ipInfo = document.getElementById('ipInfo');
    elements.searchBtn = document.getElementById('searchBtn');

    // 绑定回车键事件
    elements.ipInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            queryIP();
        }
    });

    // 自动查询当前IP
    queryMyIP();

    // 初始化Cookie横幅
    initCookieBanner();
});

// 显示加载状态
function showLoading() {
    elements.loading.style.display = 'block';
    elements.error.style.display = 'none';
    elements.ipInfo.style.display = 'none';
}

// 隐藏加载状态
function hideLoading() {
    elements.loading.style.display = 'none';
}

// 显示错误信息
function showError(message) {
    elements.error.textContent = message;
    elements.error.style.display = 'block';
    elements.ipInfo.style.display = 'none';
}

// 验证IP地址格式
function validateIP(ip) {
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ip)) {
        return false;
    }

    const parts = ip.split('.');
    return parts.every(part => {
        const num = parseInt(part, 10);
        return num >= 0 && num <= 255;
    });
}

// 查询IP地址
async function queryIP() {
    const ip = elements.ipInput.value.trim();

    if (!ip) {
        showError('⚠️ ' + t('inputError'));
        return;
    }

    if (!validateIP(ip)) {
        showError('⚠️ ' + t('formatError'));
        return;
    }

    await fetchIPInfo(ip);
}

// 查询当前用户的IP
async function queryMyIP() {
    await fetchIPInfo('');
}

// 获取IP信息
async function fetchIPInfo(ip) {
    showLoading();

    try {
        const url = ip ? `${API_BASE_URL}${ip}/json` : `${API_BASE_URL}json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(t('networkError'));
        }

        const data = await response.json();

        // ipinfo.io 使用 bogon 字段表示无效IP
        if (data.bogon) {
            throw new Error(t('bogonError'));
        }

        displayIPInfo(data);

        // 如果是查询当前IP，自动填入输入框
        if (!ip) {
            elements.ipInput.value = data.ip;
        }

    } catch (error) {
        console.error('Query IP failed:', error);
        showError(`❌ ${t('queryFailed')}: ${error.message}`);
    } finally {
        hideLoading();
    }
}

// 获取国家名称（根据当前语言）
function getCountryName(code) {
    if (!code) return '-';
    const lang = getPageLang();
    if (lang === 'zh') {
        return COUNTRY_MAP_ZH[code.toUpperCase()] || COUNTRY_MAP[code.toUpperCase()] || code;
    }
    return COUNTRY_MAP[code.toUpperCase()] || code;
}

// 将英文地名翻译为中文（用于城市和省份）
function translateToZh(text, type) {
    if (!text || text === '-') return text;
    if (getPageLang() !== 'zh') return text;
    if (type === 'city') {
        return CITY_MAP_ZH[text] || text;
    }
    if (type === 'region') {
        return REGION_MAP_ZH[text] || text;
    }
    if (type === 'isp') {
        // 尝试完整匹配，如果没有则尝试部分匹配
        if (ISP_MAP_ZH[text]) {
            return ISP_MAP_ZH[text];
        }
        // 部分匹配：如果ISP名称包含映射表中的关键字
        for (const [key, value] of Object.entries(ISP_MAP_ZH)) {
            if (text.includes(key)) {
                return value;
            }
        }
        return text;
    }
    if (type === 'timezone') {
        return TIMEZONE_MAP_ZH[text] || text;
    }
    return text;
}

// 显示IP信息
function displayIPInfo(data) {
    // 更新IP地址
    document.getElementById('ipAddress').textContent = data.ip;

    // 更新IP类型（根据是否为内网IP判断）
    const ipType = isPrivateIP(data.ip) ? t('privateIP') : t('publicIP');
    document.getElementById('ipType').textContent = ipType;

    // 解析经纬度
    let lat = null, lon = null;
    if (data.loc) {
        const [latitude, longitude] = data.loc.split(',');
        lat = parseFloat(latitude);
        lon = parseFloat(longitude);
    }

    // 解析组织和ISP信息
    let ispName = data.org || '-';
    let orgName = data.org || '-';

    if (data.org && data.org.includes(' ')) {
        const parts = data.org.split(' ');
        orgName = parts[0];
        ispName = parts.slice(1).join(' ');
    }

    // 更新各项信息 - 中文页面优先显示中文地名
    document.getElementById('country').textContent = getCountryName(data.country);
    document.getElementById('region').textContent = translateToZh(data.region, 'region') || '-';
    document.getElementById('city').textContent = translateToZh(data.city, 'city') || '-';
    document.getElementById('zip').textContent = data.postal || '-';
    document.getElementById('isp').textContent = translateToZh(ispName, 'isp') || '-';
    document.getElementById('org').textContent = orgName;
    document.getElementById('location').textContent =
        lat && lon ? `${lat}, ${lon}` : '-';
    document.getElementById('timezone').textContent = translateToZh(data.timezone, 'timezone') || '-';

    // 更新地图链接
    const mapLink = document.getElementById('mapLink');
    if (lat && lon) {
        mapLink.innerHTML = `
            <p>📌 ${t('mapView')}</p>
            <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank" rel="noopener noreferrer">
                ${t('googleMaps')}
            </a>
            &nbsp;|&nbsp;
            <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=12" target="_blank" rel="noopener noreferrer">
                ${t('openStreetMap')}
            </a>
        `;
    } else {
        mapLink.innerHTML = `<p>${t('noLocation')}</p>`;
    }

    // 显示结果
    elements.error.style.display = 'none';
    elements.ipInfo.style.display = 'block';
}

// 判断是否为内网IP
function isPrivateIP(ip) {
    const parts = ip.split('.').map(Number);
    if (parts[0] === 10) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 127) return true;
    return false;
}

// Cookie同意横幅
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    if (!banner || !acceptBtn) return;

    // 检查是否已经同意
    if (localStorage.getItem('cookieConsent')) {
        banner.style.display = 'none';
        // 如果已同意，可以加载广告脚本
        loadAdScripts();
    } else {
        banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
        loadAdScripts();
    });
}

// 加载广告脚本（用户同意Cookie后调用）
function loadAdScripts() {
    // Google AdSense 代码占位 - 替换 ca-pub-XXXXXXXXXXXXXXXX 为你的发布商ID
    // 示例：
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
    // script.crossOrigin = 'anonymous';
    // document.head.appendChild(script);
}
