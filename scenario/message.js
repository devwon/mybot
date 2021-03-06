const moment = require('moment-timezone');
const dateRange = 7;

module.exports = {
  basic: {
    type: 'buttons',
    buttons: [
      '예약하기',
      '예약확인'
    ]
  },
  reservation: {
    message: {
      text: '기본 대화 분기입니다.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/ldcc_logo.jpg',
        'width': 640,
        'height': 480
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: [
        '예약하기',
        '예약확인'
      ]
    }
  },
  name: {
    message: {
      text: '예약자명을 입력해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/fortune.jpg',
        'width': 640,
        'height': 480
      }
    }
  },
  updateName: {
    message: {
      text: '예약자명을 입력해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/fortune.jpg',
        'width': 640,
        'height': 480
      }
    }
  },
  phone: {
    message: {
      text: '연락처를 입력해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/fortune.jpg',
        'width': 640,
        'height': 480
      }

    }
  },
  date: (function () {
    const dateArr = [...Array(dateRange)];
    for (let i in dateArr) {
      dateArr[i] = moment().add('days', i).locale('ko').tz('Asia/Seoul').format(`MM월 DD일 dddd`);
    };
    return {
      message: {
        text: '예약 날짜를 선택해주세요.',
        photo: {
          'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/card.jpg',
          'width': 640,
          'height': 480
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: dateArr
      }
    };
  })(),
  time: {
    message: {
      text: '예약 시간을 선택해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/card.jpg',
        'width': 640,
        'height': 480
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: [
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
      ]
    }
  },
  fortuneTeller: {
    message: {
      text: '예약하실 역술가 선생님을 선택해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/cookie.jpg',
        'width': 640,
        'height': 480
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: [
        '선녀보살 진하윤 선생님',
        '백마장군 김필영 선생님',
        '아기동자 오동환 선생님',
        '중국장군보살 정은솔 선생님'
      ]
    }
  },
  fortuneType: {
    message: {
      text: '풀이할 사주종류를 선택해주세요.',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/cookie.jpg',
        'width': 640,
        'height': 480
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: [
        '사주학',
        '관상학',
        '손금',
        '작명',
        '타로점'
      ]
    }
  },
  confirm: function (data) {
    const { name, phone, date, time, fortuneTeller, fortuneType } = data;
    return {
      message: {
        text: `예약자명: [ ${name} ]\n연락처: [ ${phone} ]\n날짜 : [ ${date} ]\n시간 : [ ${time} ]\n선생님 : [ ${fortuneTeller} ]\n사주종류 : [ ${fortuneType} ]\n위와 같이 예약하시겠습니까?`,
        photo: {
          'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/cookie.jpg',
          'width': 640,
          'height': 480
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: [
          '예약완료',
          '예약자명 변경하기',
          '연락처 변경하기',
          '날짜 변경하기',
          '시간 변경하기',
          '선생님 변경하기',
          '사주종류 변경하기'
        ]
      }
    }
  },
  check: function (data) {
    const { name, phone, date, time, fortuneTeller, fortuneType } = data;
    return {
      message: {
        text: `예약 내역은 아래와 같습니다.\n예약자명: [ ${name} ]\n연락처: [ ${phone} ]\n날짜 : [ ${date} ]\n시간 : [ ${time} ]\n선생님 : [ ${fortuneTeller} ]\n사주종류 : [ ${fortuneType} ]`,
        photo: {
          'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/astrology.jpg',
          'width': 640,
          'height': 480
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: [
          '예약하기',
          '예약확인'
        ]
      }
    }
  },
  newReservation: {
    message: {
      text: '기존 예약 내역이 있습니다. 기존 예약 내역을 지우고 새로 예약하시겠습니까?',
      photo: {
        'url': 'http://ec2-52-79-83-252.ap-northeast-2.compute.amazonaws.com:8080/ldcc_logo.jpg',
        'width': 640,
        'height': 480
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: [
        '네',
        '아니오'
      ]
    }
  }
}
