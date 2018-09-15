const local = 'https://www.manmanku.cn';
//const local = 'http://localhost:8080';
//const local = 'http://192.168.0.2:8080';

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatWxUser = u => {
  const ret = [u.nickName,
  u.gender,
  u.language,
  u.city,
  u.province,
  u.country,
  u.avatarUrl
  ].join('*');
  console.log("formatWxUser: " + ret);
  return ret;
}

const datetimeFormat = longTypeDate => {
  var date = new Date();
  date.setTime(longTypeDate);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

const dateToAbstract = longAimDate => {
  var date = new Date();
  var longDate = date.getTime();
  var poor = parseInt((longDate - longAimDate) / 60000); // 转化成分钟
  var day = formatMonToDay(date.getMonth() + 1);
  var ret = "";
  if (poor < 1) {
    ret = "刚刚";
  } else if (1 <= poor && poor < 60) {
    ret = poor + "分钟前";
  } else if (60 <= poor && poor < 1440) {
    ret = parseInt(poor / 60) + "小时前";
  } else if (1440 <= poor && poor < 1440 * day) {
    ret = parseInt(poor / 1440) + "天前";
  } else if (1440 * day <= poor && poor < 525600) {
    ret = parseInt(poor / (1440 * day)) + "月前";
  } else if (525600 <= poor) {
    ret = parseInt(poor / 525600) + "年前";
  }
  return ret;
}

const formatMonToDay = function (mon, year) {
  if (mon == "1" || mon == "3" || mon == "5" || mon == "7" || mon == "8" || mon == "10" || mon == "12") {
    return 31;
  } else if (mon == "4" || mon == "6" || mon == "9" || mon == "11") {
    return 30;
  } else {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return 29;
    } else {
      return 28;
    }
  }
}

const formatDateList = dateList => {
  var ret = new Array();
  for (var i = 0; i < dateList.length; i++) {
    var obj = dateList[i];
    obj.cdate = dateToAbstract(obj.cdate);
    ret.push(obj);
  }
  return ret;
}

module.exports = {
  local: local,
  formatTime: formatTime,
  formatWxUser: formatWxUser,
  datetimeFormat: datetimeFormat,
  dateToAbstract: dateToAbstract,
  formatDateList: formatDateList
}