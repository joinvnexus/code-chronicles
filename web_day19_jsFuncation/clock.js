function updateTime() {
    // Step 1: বর্তমান সময় (ঘণ্টা, মিনিট, সেকেন্ড) পাওয়া
    let currentTime = new Date();

    // Step 2: ঘণ্টা, মিনিট এবং সেকেন্ড আলাদা করা
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Step 3: AM বা PM চেক করা
    let period = "AM";
    if (hours >= 12) {
        period = "PM";
    }

    // Step 4: 12 ঘণ্টা ফরম্যাটে কনভার্ট করা
    if (hours == 0) {
        hours = 12; // রাত 12 হলে 12AM দেখাবে
    } else if (hours > 12) {
        hours = hours - 12; // 13 হলে 1PM হবে
    }

    // Step 5: যদি সংখ্যা এক ডিজিট হয় তাহলে সামনে 0 যোগ করা (01, 02, 03)
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Step 6: চূড়ান্ত সময়ের টেক্সট তৈরি করা
    let timeString = hours + ":" + minutes + ":" + seconds + " " + period;

    // Step 7: HTML এ clock আইডিতে সময় দেখানো
    document.getElementById("clock").innerText = timeString;
}

// প্রতি 1 সেকেন্ডে updateTime ফাংশন চালানো
setInterval(updateTime, 1000);
