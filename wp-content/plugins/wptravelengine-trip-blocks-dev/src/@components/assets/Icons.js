const Icons = {
  desktop: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tablet: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mobile: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  help: (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.7677 9.75C7.7677 9.89833 7.72371 10.0433 7.6413 10.1667C7.55889 10.29 7.44176 10.3861 7.30471 10.4429C7.16767 10.4997 7.01687 10.5145 6.87138 10.4856C6.7259 10.4566 6.59226 10.3852 6.48737 10.2803C6.38248 10.1754 6.31105 10.0418 6.28211 9.89632C6.25317 9.75083 6.26803 9.60003 6.32479 9.46299C6.38156 9.32594 6.47769 9.20881 6.60102 9.1264C6.72436 9.04398 6.86937 9 7.0177 9C7.21661 9 7.40738 9.07902 7.54803 9.21967C7.68868 9.36032 7.7677 9.55109 7.7677 9.75ZM7.0177 3C5.63895 3 4.5177 4.00937 4.5177 5.25V5.5C4.5177 5.63261 4.57038 5.75978 4.66415 5.85355C4.75792 5.94732 4.88509 6 5.0177 6C5.15031 6 5.27749 5.94732 5.37126 5.85355C5.46502 5.75978 5.5177 5.63261 5.5177 5.5V5.25C5.5177 4.5625 6.19083 4 7.0177 4C7.84458 4 8.5177 4.5625 8.5177 5.25C8.5177 5.9375 7.84458 6.5 7.0177 6.5C6.88509 6.5 6.75792 6.55268 6.66415 6.64644C6.57038 6.74021 6.5177 6.86739 6.5177 7V7.5C6.5177 7.63261 6.57038 7.75978 6.66415 7.85355C6.75792 7.94732 6.88509 8 7.0177 8C7.15031 8 7.27749 7.94732 7.37126 7.85355C7.46502 7.75978 7.5177 7.63261 7.5177 7.5V7.455C8.6577 7.24562 9.5177 6.33625 9.5177 5.25C9.5177 4.00937 8.39645 3 7.0177 3ZM13.5177 6.5C13.5177 7.78558 13.1365 9.04228 12.4223 10.1112C11.708 11.1801 10.6929 12.0132 9.50514 12.5052C8.31742 12.9972 7.01049 13.1259 5.74961 12.8751C4.48874 12.6243 3.33055 12.0052 2.42151 11.0962C1.51247 10.1872 0.893403 9.02896 0.642599 7.76809C0.391795 6.50721 0.520517 5.20028 1.01249 4.01256C1.50446 2.82484 2.33758 1.80968 3.4065 1.09545C4.47542 0.381218 5.73212 0 7.0177 0C8.74105 0.00181989 10.3933 0.687223 11.6119 1.90582C12.8305 3.12441 13.5159 4.77665 13.5177 6.5ZM12.5177 6.5C12.5177 5.4122 12.1951 4.34883 11.5908 3.44436C10.9864 2.53989 10.1275 1.83494 9.12246 1.41866C8.11747 1.00238 7.0116 0.893462 5.94471 1.10568C4.87781 1.3179 3.8978 1.84172 3.12862 2.61091C2.35943 3.3801 1.8356 4.36011 1.62338 5.427C1.41117 6.4939 1.52008 7.59976 1.93637 8.60476C2.35265 9.60975 3.0576 10.4687 3.96207 11.0731C4.86654 11.6774 5.9299 12 7.0177 12C8.47588 11.9983 9.87387 11.4183 10.905 10.3873C11.9361 9.35617 12.516 7.95818 12.5177 6.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  link: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5354 7.99995C7.5054 9.36695 9.5464 9.12695 10.5464 7.99995L12.5354 5.99995C13.6594 4.77195 13.6994 3.18595 12.5354 1.99995C11.3994 0.842952 9.6714 0.842952 8.5354 1.99995L6.5354 3.99995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53543 7.06999C7.56543 5.70299 5.53543 5.87299 4.53543 6.99999L2.53543 8.97499C1.41143 10.203 1.37143 11.814 2.53543 13C3.67143 14.157 5.39943 14.157 6.53543 13L8.53543 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  upload: (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.1176 15.8L12.5176 11.4M12.5176 11.4L16.9176 15.8M12.5176 11.4V21.3001M21.3176 16.6172C22.6613 15.5075 23.5176 13.8288 23.5176 11.95C23.5176 8.6087 20.809 5.90001 17.4676 5.90001C17.2273 5.90001 17.0024 5.77461 16.8804 5.56752C15.4459 3.13332 12.7975 1.5 9.7676 1.5C5.21124 1.5 1.51758 5.19366 1.51758 9.75002C1.51758 12.0227 2.43657 14.0808 3.92323 15.5729"
        stroke="currentColor"
        strokeWidth="1.46667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  minus: (
    <svg
      width="11"
      height="2"
      viewBox="0 0 11 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35103 1.16675C1.13002 1.16675 0.918058 1.11407 0.761778 1.0203C0.605498 0.926533 0.5177 0.799356 0.5177 0.666748C0.5177 0.53414 0.605498 0.406963 0.761778 0.313195C0.918058 0.219427 1.13002 0.166748 1.35103 0.166748H9.68437C9.90538 0.166748 10.1173 0.219427 10.2736 0.313195C10.4299 0.406963 10.5177 0.53414 10.5177 0.666748C10.5177 0.799356 10.4299 0.926533 10.2736 1.0203C10.1173 1.11407 9.90538 1.16675 9.68437 1.16675H1.35103Z"
        fill="currentColor"
      />
    </svg>
  ),
  plus: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.79272 1.27478V11.2748M0.792725 6.27478H10.7927"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  leftAlignment: (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.2677 0.75H23.7677M1.2677 7H16.2677M1.2677 13.25H6.2677"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  centerAlignment: (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.23206 1.28571H21.8035M6.37491 8.99999H16.6606M3.80348 16.7143H19.2321"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  rightAlignment: (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7677 0.75H1.2677M23.7677 7H8.7677M23.7677 13.25H18.7677"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  top: (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.08916 15H6.94631C6.35457 15 5.87488 14.5203 5.87488 13.9286V3.21429C5.87488 2.62255 6.35457 2.14286 6.94631 2.14286H9.08916C9.6809 2.14286 10.1606 2.62255 10.1606 3.21429V13.9286C10.1606 14.5203 9.6809 15 9.08916 15Z"
        fill="currentColor"
      />
      <path
        d="M1.05341 1.07143C0.911334 1.07143 0.775073 1.01499 0.674607 0.914522C0.574141 0.814056 0.5177 0.677795 0.5177 0.535714C0.5177 0.393634 0.574141 0.257373 0.674607 0.156907C0.775073 0.0564411 0.911334 0 1.05341 0V1.07143ZM14.982 0C15.1241 0 15.2603 0.0564411 15.3608 0.156907C15.4613 0.257373 15.5177 0.393634 15.5177 0.535714C15.5177 0.677795 15.4613 0.814056 15.3608 0.914522C15.2603 1.01499 15.1241 1.07143 14.982 1.07143V0ZM1.05341 0H14.982V1.07143H1.05341V0Z"
        fill="currentColor"
      />
    </svg>
  ),
  middle: (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.51768 0C6.65976 0 6.79602 0.0564411 6.89649 0.156907C6.99696 0.257373 7.0534 0.393634 7.0534 0.535714V5.35714H5.98197V0.535714C5.98197 0.393634 6.03841 0.257373 6.13888 0.156907C6.23934 0.0564411 6.3756 0 6.51768 0ZM6.51768 15C6.3756 15 6.23934 14.9436 6.13888 14.8431C6.03841 14.7426 5.98197 14.6064 5.98197 14.4643V9.64286H7.0534V14.4643C7.0534 14.6064 6.99696 14.7426 6.89649 14.8431C6.79602 14.9436 6.65976 15 6.51768 15ZM0.0891113 6.42857C0.0891113 6.14441 0.201994 5.87189 0.402925 5.67096C0.603857 5.47003 0.876379 5.35714 1.16054 5.35714H11.8748C12.159 5.35714 12.4315 5.47003 12.6324 5.67096C12.8334 5.87189 12.9463 6.14441 12.9463 6.42857V8.57143C12.9463 8.85559 12.8334 9.12811 12.6324 9.32904C12.4315 9.52997 12.159 9.64286 11.8748 9.64286H1.16054C0.876379 9.64286 0.603857 9.52997 0.402925 9.32904C0.201994 9.12811 0.0891113 8.85559 0.0891113 8.57143V6.42857Z"
        fill="currentColor"
      />
    </svg>
  ),
  bottom: (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.08916 0H6.94631C6.35457 0 5.87488 0.479695 5.87488 1.07143V11.7857C5.87488 12.3774 6.35457 12.8571 6.94631 12.8571H9.08916C9.6809 12.8571 10.1606 12.3774 10.1606 11.7857V1.07143C10.1606 0.479695 9.6809 0 9.08916 0Z"
        fill="currentColor"
      />
      <path
        d="M1.05341 13.9286C0.911334 13.9286 0.775073 13.985 0.674607 14.0855C0.574141 14.186 0.5177 14.3222 0.5177 14.4643C0.5177 14.6064 0.574141 14.7426 0.674607 14.8431C0.775073 14.9436 0.911334 15 1.05341 15V13.9286ZM14.982 15C15.1241 15 15.2603 14.9436 15.3608 14.8431C15.4613 14.7426 15.5177 14.6064 15.5177 14.4643C15.5177 14.3222 15.4613 14.186 15.3608 14.0855C15.2603 13.985 15.1241 13.9286 14.982 13.9286V15ZM1.05341 15H14.982V13.9286H1.05341V15Z"
        fill="currentColor"
      />
    </svg>
  ),
  pen: (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.51758 15.36V19H9.17618L19.5176 8.65405L15.8651 5L5.51758 15.36Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12.5176 8L16.5176 12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  none: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.10829 4.10829L15.8916 15.8916M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dashed: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.91675 10.8334C2.56953 10.8334 2.27439 10.7118 2.03133 10.4688C1.78828 10.2257 1.66675 9.9306 1.66675 9.58337C1.66675 9.23615 1.78828 8.94101 2.03133 8.69796C2.27439 8.4549 2.56953 8.33337 2.91675 8.33337H7.91675C8.26397 8.33337 8.55911 8.4549 8.80216 8.69796C9.04522 8.94101 9.16675 9.23615 9.16675 9.58337C9.16675 9.9306 9.04522 10.2257 8.80216 10.4688C8.55911 10.7118 8.26397 10.8334 7.91675 10.8334H2.91675ZM12.0834 10.8334C11.7362 10.8334 11.4411 10.7118 11.198 10.4688C10.9549 10.2257 10.8334 9.9306 10.8334 9.58337C10.8334 9.23615 10.9549 8.94101 11.198 8.69796C11.4411 8.4549 11.7362 8.33337 12.0834 8.33337H17.0834C17.4306 8.33337 17.7258 8.4549 17.9688 8.69796C18.2119 8.94101 18.3334 9.23615 18.3334 9.58337C18.3334 9.9306 18.2119 10.2257 17.9688 10.4688C17.7258 10.7118 17.4306 10.8334 17.0834 10.8334H12.0834Z"
        fill="currentColor"
      />
    </svg>
  ),
  menu: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.08337H17.5M2.5 12.9167H17.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ellipsis: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10.0001C10.8334 9.53984 10.4603 9.16675 10 9.16675C9.5398 9.16675 9.16671 9.53984 9.16671 10.0001C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8334 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10.0001C5.00004 9.53984 4.62694 9.16675 4.16671 9.16675C3.70647 9.16675 3.33337 9.53984 3.33337 10.0001C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevronDown: (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_336_894)">
        <path
          d="M1.01758 2L6.01758 7L11.0176 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_336_894">
          <rect
            width="12"
            height="8"
            fill="white"
            transform="translate(0.0175781 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  move: (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_724_134)">
        <path d="M0.75 0.25H3.75V3.25H0.75V0.25ZM8.25 0.25H11.25V3.25H8.25V0.25ZM0.75 5.75H3.75V8.75H0.75V5.75ZM8.25 5.75H11.25V8.75H8.25V5.75ZM0.75 11.25H3.75V14.25H0.75V11.25ZM8.25 11.25H11.25V14.25H8.25V11.25ZM0.75 16.75H3.75V19.75H0.75V16.75ZM8.25 16.75H11.25V19.75H8.25V16.75Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_724_134">
          <rect width="12" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  dot: (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_724_5659)">
        <path d="M3.86535 0.538818C2.94729 0.538818 2.06683 0.903516 1.41767 1.55268C0.768506 2.20184 0.403809 3.0823 0.403809 4.00036C0.403809 4.91841 0.768506 5.79887 1.41767 6.44803C2.06683 7.0972 2.94729 7.4619 3.86535 7.4619C5.7865 7.4619 7.32689 5.92151 7.32689 4.00036C7.32689 3.0823 6.96219 2.20184 6.31302 1.55268C5.66386 0.903516 4.7834 0.538818 3.86535 0.538818Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_724_5659">
          <rect width="6.92308" height="6.92308" fill="white" transform="translate(0.403809 0.538818)" />
        </clipPath>
      </defs>
    </svg>
  ),
  pipe: (
    <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_724_5665)">
        <path d="M1.86536 12.7689V1.23047" stroke="currentColor" strokeWidth="1.38462" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_724_5665">
          <rect width="2.30769" height="13.8462" fill="white" transform="translate(0.711548 0.0769043)" />
        </clipPath>
      </defs>
    </svg>
  ),
  slash: (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_724_5668)">
        <path d="M9.6923 0.942139L1.03845 13.0575" stroke="currentColor" strokeWidth="1.38462" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_724_5668">
          <rect width="10.3846" height="13.8462" fill="white" transform="translate(0.173096 0.0769043)" />
        </clipPath>
      </defs>
    </svg>
  ),
  brush: (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g mask="url(#mask0_2471_2065)">
        <path d="M6.5177 21C5.7677 21 5.02603 20.8167 4.2927 20.45C3.55937 20.0833 2.9677 19.6 2.5177 19C2.95103 19 3.3927 18.8292 3.8427 18.4875C4.2927 18.1458 4.5177 17.65 4.5177 17C4.5177 16.1667 4.80937 15.4583 5.3927 14.875C5.97603 14.2917 6.68437 14 7.5177 14C8.35103 14 9.05937 14.2917 9.6427 14.875C10.226 15.4583 10.5177 16.1667 10.5177 17C10.5177 18.1 10.126 19.0417 9.3427 19.825C8.55937 20.6083 7.6177 21 6.5177 21ZM12.2677 15L9.5177 12.25L18.4677 3.29999C18.651 3.11666 18.8802 3.02083 19.1552 3.01249C19.4302 3.00416 19.6677 3.09999 19.8677 3.29999L21.2177 4.64999C21.4177 4.84999 21.5177 5.08333 21.5177 5.34999C21.5177 5.61666 21.4177 5.84999 21.2177 6.04999L12.2677 15Z" fill="currentColor" />
      </g>
    </svg>
  ),
  gradient: (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g mask="url(#mask0_2471_2070)">
        <path d="M3.5177 3V21H21.5177V3H3.5177ZM10.1844 19.6667H9.85103V4.33333H10.1844V19.6667ZM12.1844 19.6667H11.5177V4.33333H12.1844V19.6667ZM14.1844 19.6667H13.1844V4.33333H14.1844V19.6667ZM16.1844 19.6667H14.851V4.33333H16.1844V19.6667ZM20.1844 19.6667H16.5177V4.33333H20.1844V19.6667Z" fill="currentColor" />
      </g>
    </svg>
  ),
  'no-repeat': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5Z" fill="currentColor" />
    </svg>

  ),
  'repeat-x': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="18.5" cy="11.5" r="2.5" fill="currentColor" />
    </svg>

  ),
  'repeat-y': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.5" cy="4.5" r="2.5" transform="rotate(90 11.5 4.5)" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(90 11.5 11.5)" fill="currentColor" />
      <circle cx="11.5" cy="18.5" r="2.5" transform="rotate(90 11.5 18.5)" fill="currentColor" />
    </svg>

  ),
  'repeat': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="18.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="4.5" cy="18.5" r="2.5" fill="currentColor" />
      <circle cx="11.5" cy="18.5" r="2.5" fill="currentColor" />
      <circle cx="18.5" cy="18.5" r="2.5" fill="currentColor" />
      <circle cx="4.5" cy="4.5" r="2.5" fill="currentColor" />
      <circle cx="11.5" cy="4.5" r="2.5" fill="currentColor" />
      <circle cx="18.5" cy="4.5" r="2.5" fill="currentColor" />
    </svg>

  )
};

export default Icons;
