const formatDateTimeMixin = {
    methods: {
        
      prettyDate(dateTime) { // dateTime comes in like this: 2020-12-11T10:41:30.947Z
        if (dateTime) {
          const mmDDyy = new Date(dateTime).toDateString().split('').splice(3)
            .join(''); // returns: 'Oct 29 2020'
          const mm = mmDDyy.split('').splice(0, 4).join('');
          const dd = mmDDyy.split('').splice(5, 2).join('');
          const yy = mmDDyy.split('').splice(7).join('');
          return `${dd} ${mm} ${yy}`;
        }
        return '';
      },

      filterDate(date) {
        return `${date.split('T')[0]} ${date.split('T')[1].split('.')[0]}`;
      },

      formalDateAndTime(dateOrDateString) {
        dateOrDateString = dateOrDateString || '?'; // '?' === unknown
  
        if (dateOrDateString.includes('T')) { // if argument passed in is: 2020-12-17T13:18:27.989Z
          dateOrDateString = this.filterDate(dateOrDateString);
        } else if (dateOrDateString === '?' || dateOrDateString === 'legacy') {
          return dateOrDateString;
        }
  
        // if argument passed in is: 2020-11-24 16:36:41
        const weekdays = ['Su', 'Mo', 'Tu', 'Wd', 'Th', 'Fr', 'Sa'];
        // HACK: one for Safari
        const date = new Date(`${dateOrDateString.split(' ')
          .join('T')}.000Z`); // that hacky part? For Safari
        const dayOfTheWeek = weekdays[date.getDay()];
  
        return `${dayOfTheWeek}. ${dateOrDateString}`;
      },

      timeSince(dateOrDateString) {
        dateOrDateString = dateOrDateString || '?'; // '?' === unknown
  
        if (dateOrDateString.includes('T')) { // if argument passed in is: 2020-12-17T13:18:27.989Z
          dateOrDateString = this.filterDate(dateOrDateString);
        } else if (dateOrDateString === '?' || dateOrDateString === 'legacy') {
          return dateOrDateString;
        }
  
        // if argument passed in is: 2020-11-24 16:36:41
        // HACK: one for Safari
        const date = new Date(`${dateOrDateString.split(' ')
          .join('T')}.000Z`); // that hacky part? For Safari
        const DAY = 24 * 60 * 60 * 1000;
        const WEEK = 7 * DAY;
  
        return `${this.timePassed(date)} ago`; // <date> => '50 seconds ago'
      },

      prettyTime(dateTime) {
        if (dateTime) {
          return dateTime.split('T').pop().split(':').splice(0, 2)
            .join(':');
        } // returns '17:18'
        return '';
      },

      timePassed(date) {
        // return a human-readable description of how long ago did we make the scan
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
  
        if (interval > 1) {
          return `${interval} yrs`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return `${interval} months`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return `${interval} days`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return `${interval} hrs`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return `${interval} min`;
        }
  
        // TODO: UTC times. Beware of possible time difference between the client and the server
        //       to avoid labels like "-93 seconds"
        return `${Math.floor(seconds)} sec`;
      },
    },
  };
  