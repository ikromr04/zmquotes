function AuthorIcon({
  width = 16,
  height = 16,
}: {
  width?: number
  height?: number
}): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M12.96 14.5643C12.9476 14.5666 12.8893 14.5773 12.7947 14.5947C9.06218 15.2814 8.37558 15.3993 8.29852 15.4085C8.1147 15.4304 7.97738 15.4193 7.87856 15.3746C7.81684 15.3467 7.7834 15.3128 7.77448 15.2979C7.77881 15.2714 7.81165 15.2082 7.83169 15.1696C7.85121 15.132 7.87331 15.0895 7.89268 15.0442C8.02113 14.7433 7.93125 14.438 7.65809 14.2476C7.4544 14.1055 7.18433 14.0479 6.85513 14.0762C6.65862 14.0931 3.21398 14.6859 1.32185 15.0128L0.393127 15.7626C2.55902 15.3873 6.68529 14.6766 6.9024 14.655C7.09635 14.6383 7.24765 14.6636 7.34011 14.7281C7.39381 14.7655 7.38852 14.7779 7.37439 14.811C7.36378 14.8358 7.34854 14.8652 7.33242 14.8962C7.27042 15.0155 7.18551 15.1789 7.21362 15.3813C7.24445 15.6033 7.40364 15.7946 7.65036 15.9062C7.78908 15.9689 7.94828 16 8.13289 16C8.20577 16 8.28261 15.9952 8.36369 15.9855C8.51216 15.9678 10.0365 15.6922 12.8945 15.1664C12.9886 15.1491 13.0465 15.1384 13.0589 15.1362C13.2127 15.1082 13.3153 14.9574 13.288 14.7995C13.2607 14.6415 13.1139 14.5362 12.96 14.5643Z"
        fill="currentColor" />
      <path
        d="M2.94373 11.7419L0.540292 14.3227C0.275586 14.6069 0.0891299 14.9582 0 15.3407L3.41269 12.5857C4.48103 13.072 5.33442 13.2269 5.98845 13.2269C7.1375 13.2269 7.67089 12.7485 7.67089 12.7485C6.6012 12.1771 6.44878 11.1107 6.44878 11.1107C7.26805 11.4662 8.97466 11.8854 8.97466 11.8854C11.2411 10.3326 12.4256 6.97056 12.4256 6.97056C12.1909 7.03678 11.9665 7.06436 11.755 7.06436C10.6913 7.06436 9.96046 6.36516 9.96046 6.36516L12.9214 5.70322C13.9058 3.62977 14 -1.14441e-05 14 -1.14441e-05L4.99754 8.21945C3.97804 9.15027 3.26119 10.3797 2.94373 11.7419Z"
        fill="currentColor" />
    </svg>
  );
}

export default AuthorIcon;
