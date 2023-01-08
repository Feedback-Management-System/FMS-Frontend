/* eslint-disable react/no-unknown-property */
import React from 'react';
import './LandingPage.css';
import logo from '../../assets/images/logo.svg';

const LandingPage = () => {
    return <div className="landingpage">
        {/* <!-- 
    - #HEADER
  --> */}

  <header>

    <div class="landingContainer">

      <a href="#" class="logo">
        <img src={logo}alt="logo"/>
        {/* <!-- <svg height="317.6250144464802" width="312.5" style="width: 312.5px; height: 317.625px;  top: -70%; left: 7%; transform: scale(0.2); z-index: 0; cursor: pointer;"><defs id="SvgjsDefs1001"></defs><g id="SvgjsG1007" featurekey="rootContainer" transform="matrix(1.679851890870981,0,0,1.679851890870981,0.0005871445827524324,0.0002897674663174521)" fill="#000000"><path xmlns="http://www.w3.org/2000/svg" d="M17.914 148.907zM22.657 154.94a90.586 90.586 0 0 0 5.861 6.251c6.914 6.805 15.159 12.525 24.004 16.851 3.259 1.526 6.265 3.107 9.787 4.468.88.338 1.779.7 2.724 1.026.953.302 1.941.604 2.974.903 1.027.321 2.122.549 3.267.786 1.146.23 2.336.493 3.614.624a91.24 91.24 0 0 1-18.434-5.99 93.833 93.833 0 0 1-16.873-9.842c-10.548-7.727-19.57-17.648-26.16-28.989-.272-.339-.685-.985-1.18-1.808l-.796-1.348-.803-1.551c-.534-1.076-1.149-2.168-1.62-3.226a71.281 71.281 0 0 0-1.326-2.748c2.048 5.101 4.412 9.563 7.059 13.806a93.473 93.473 0 0 0 3.869 5.697c-.192-.259-.392-.511-.583-.771a95.012 95.012 0 0 0 4.6 5.841l.016.02zM18.039 149.078l-.125-.17.125.17zM1.335 106.042l-.483-3.875c.256 2.365.553 5.008 1.096 7.654l-.327-1.879a23.961 23.961 0 0 1-.286-1.9zM85.812 185.575c6.652.673 13.628.472 20.461-.609 6.837-1.077 13.524-2.987 19.741-5.449-11.45 4.503-23.602 6.506-35.49 6.171-1.591-.025-3.159 0-4.712-.113z"></path><path xmlns="http://www.w3.org/2000/svg" d="M46.426 171.967l-.259-.165c.087.055.172.111.259.165zM46.167 171.802zM43.653 170.135zM56.077 177.284A83.837 83.837 0 0 0 73.2 183.1c-9.688-2.21-18.805-6.109-26.774-11.133 3.06 1.947 6.277 3.749 9.651 5.317zM177.002 107.094c.098-1.58.296-3.238.346-4.027.594-5.071.77-9.401.745-13.745-.11-.783-.425-2.25-.55-3.918-.153-1.672-.378-3.309-.568-4.924-.289-1.601-.538-3.186-.854-4.74 2.275 11.617 2.237 23.279.144 34.282a94.97 94.97 0 0 1 .737-2.928z"></path><path xmlns="http://www.w3.org/2000/svg" d="M.887 83.482c.848-6.9 2.653-13.626 4.37-18.107l-.695 3.28c.429-.961 1.122-3.194 2.067-5.557l.682-1.802.753-1.747c.5-1.131.92-2.203 1.363-3.025-.303.771-.595 1.602-.947 2.436-.345.837-.732 1.687-1.101 2.542l1.514-3.409A111.863 111.863 0 0 0 4.954 69.8c-1.133 4.352-2.029 8.926-2.511 13.032-.14 1.024-.189 2.024-.28 2.978-.067.954-.183 1.864-.192 2.724-.042 1.719-.1 3.224-.071 4.428.105 2.409.25 3.61.459 2.939.411-1.333.403-8.188 1.837-16.767.767-4.276 1.868-8.966 3.362-13.561 1.483-4.599 3.427-9.058 5.44-12.992l-.592 1.292-.545 1.331-1.116 2.691-1.024 2.78-.521 1.402c-.153.476-.308.954-.461 1.434-1.32 3.807-2.307 7.816-3.167 11.857l-.559 3.052c-.205 1.014-.292 2.046-.444 3.067-.318 2.041-.434 4.097-.611 6.129-.199 4.074-.239 8.098.13 11.946-.015-.914-.03-1.726-.017-2.512l.115-2.355c.048-.809.039-1.667.115-2.65.07-.983.134-2.091.19-3.402.391-6.608 1.572-13.15 3.408-19.481 1.75-6.358 3.814-11.957 6.889-17.03l.801-1.526c.542-1.024.993-2.034 1.566-3.064.653-1.13 1.278-1.976 1.784-2.751.521-.767.963-1.441 1.469-2.095l3.682-5.082c.075-.009-.022.185-.2.473a28.962 28.962 0 0 1 1.959-2.49c.755-.875 1.488-1.803 2.109-2.569.146-.007.288-.011.623-.251 8.65-9.197 19.295-16.692 31.291-21.417l2.667-1.039 2.7-.899 1.343-.448 1.36-.38 2.71-.753c1.55-.373 3.12-.751 4.721-1.091l2.437-.426c.819-.141 1.642-.3 2.484-.378 1.674-.201 3.134-.625 3.921-.729 4.369-.249 8.73-.199 13.849.216.397.007 1.015.043 1.732.082.717.041 1.537.061 2.332.134.932.21 1.927.418 2.971.621 6.369.988 12.527 2.754 18.386 5.103l-.007-.028 2.244.894 2.29 1.058c1.571.684 3.11 1.559 4.7 2.383.798.407 1.554.904 2.338 1.354.77.474 1.576.894 2.32 1.412 1.508 1.002 3.037 1.961 4.446 3.032a99.912 99.912 0 0 1 6.6 5.198c.046.042.094.081.14.122l.042.038 1.457 1.322 1.394 1.391 1.395 1.392c.462.467.89.967 1.337 1.449-.216-.35-.208-.491-.2-.63-.689-.66-1.504-1.441-2.309-2.21 1.343 1.222 2.515 2.327 3.477 3.229.371.474.776.94 1.16 1.449l1.186 1.566 1.261 1.629 1.255 1.752c2.226 2.838 4.191 5.874 6.057 8.97.864 1.588 1.817 3.131 2.586 4.774l1.213 2.436 1.092 2.497c.314.533.192.022.231-.068 1.225 2.962 2.21 6.042 3.102 9.146a88.212 88.212 0 0 1 3.408 17.211c.225 1.378.321 2.772.52 4.153l-.123 2.924c-.001 1.103.057 2.206.01 3.311l-.128 3.326c-.016.75-.124 1.569-.187 2.459-.084.888-.128 1.846-.256 2.856l-.412 3.192c-.132 1.119-.387 2.269-.583 3.471a90.635 90.635 0 0 1-4.312 15.482c-.242.826-.427 1.486-.592 1.855-.627 1.501-1.296 2.954-1.942 4.385-.723 1.394-1.386 2.788-2.127 4.108a86.09 86.09 0 0 1-7.949 12.379c-.336.439-.649.885-.987 1.297l-.998 1.206c-.66.779-1.25 1.558-1.876 2.234-1.251 1.352-2.301 2.606-3.286 3.549-1.128 1.178-1.027 1.233-.246.665a35.07 35.07 0 0 0 1.608-1.262l2.122-1.914c.776-.677 1.519-1.441 2.235-2.161.708-.725 1.416-1.386 1.962-1.984 1.101-1.191 1.824-1.926 1.67-1.599-1.777 3.345-5.013 7.471-9.743 12.035-2.413 2.227-5.128 4.647-8.339 6.98-1.566 1.221-3.307 2.338-5.082 3.558-1.834 1.123-3.708 2.353-5.757 3.445-4.484 2.442 3.365-1.475 3.577-1.512a22.87 22.87 0 0 1-2.377 1.64c-1.478.786-2.943 1.597-4.474 2.273-.895.411-1.774.855-2.679 1.239l-2.729 1.122 1.444-.568c2.952-1.173 5.711-2.555 8.202-3.922-.936.566-1.96 1.221-3.082 1.812-1.203.622-2.448 1.302-3.697 1.909l-3.625 1.686c12.968-4.711 24.885-12.507 34.319-22.67 4.723-5.066 8.935-10.631 12.369-16.651a93.904 93.904 0 0 0 8.288-18.999c-3.154 9.93-8.071 19.052-13.981 26.765 10.744-14.507 17.15-32.293 17.999-50.636-.001 1.011-.101 2.018-.168 3.025-.083 1.007-.123 2.018-.241 3.022-.257 2.005-.441 4.021-.827 6.009-.624 4-1.636 7.931-2.782 11.815 2.262-7.021 3.613-14.424 4.145-21.869.554-7.451.092-14.947-1.057-22.211 1.974 9.622 2.301 20.524.619 31.298 1.182-6.949 1.482-14.112 1.028-21.214-.102-2.713-.422-5.407-.685-7.901-.377-2.476-.662-4.762-1.027-6.611 1.445 6.826 2.015 12.648 2.293 18.136-.267-11.977-2.748-24.112-7.62-35.511 2.659 6.191 4.842 12.851 6.175 19.698 1.34 6.84 1.897 13.838 1.58 20.57-.015-.788.018-1.575-.028-2.366l-.107-2.391c.287 10.85-1.384 21.604-4.696 31.717-1.662 5.056-3.715 9.969-6.2 14.644a95.521 95.521 0 0 1-8.56 13.316c3.673-4.29 7.551-10.354 10.646-17.015 3.081-6.675 5.368-13.894 6.941-20.199-2.314 11.322-6.907 22.494-13.571 32.471-6.646 9.985-15.351 18.764-25.423 25.502-10.06 6.759-21.474 11.437-33.187 13.748a94.608 94.608 0 0 1-17.657 1.809 94.462 94.462 0 0 1-17.361-1.515l3.005.571c1.002.19 2.018.295 3.026.445 2.016.324 4.055.446 6.087.633 4.073.229 8.168.306 12.25-.005 4.089-.217 8.152-.827 12.196-1.572 2.006-.456 4.036-.829 6.017-1.414.994-.278 2-.521 2.987-.83l2.955-.958c-1.492.462-3.062 1.074-4.739 1.523l-2.101.618a91.772 91.772 0 0 0 12.91-4.496 89.46 89.46 0 0 0 5.651-2.705 96.653 96.653 0 0 1-10.714 4.872 98.407 98.407 0 0 1-21.66 5.382c-1.11.176-2.122.231-3.029.326l-2.428.24c-1.429.113-2.484.164-3.222.245-1.477.147-1.687.284-1.099.397.587.113 1.971.203 3.673.251 1.697-.01 3.71-.101 5.541-.268 18.397-1.887 35.288-9.107 48.824-19.916 13.545-10.811 23.919-25.172 29.701-41.467.363-.946.642-1.922.944-2.89.293-.971.617-1.932.882-2.912.491-1.97 1.072-3.917 1.448-5.917l.619-2.985.487-3.012.241-1.507.172-1.517.342-3.034c.698-8.114.422-16.315-.812-24.363-.66-4.554-1.82-9.961-3.315-14.777l-1.15-3.484c-.4-1.107-.825-2.151-1.203-3.133l-.557-1.415-.571-1.271-.981-2.124c-3.134-6.359-7.072-12.424-11.682-18.065-4.605-5.643-9.896-10.868-15.861-15.418l-2.244-1.703-2.327-1.608-1.166-.806-1.203-.756-2.417-1.508c-3.295-1.904-6.67-3.739-10.228-5.261-3.521-1.598-7.206-2.895-10.957-4.055-1.895-.52-3.781-1.1-5.724-1.499-.968-.209-1.928-.463-2.907-.638l-2.944-.521C100.363.01 93.04-.285 85.724.265 78.412.83 71.069 2.218 64.028 4.614l-2.635.913c-.881.297-1.73.682-2.597 1.019-.858.359-1.735.673-2.577 1.069l-2.532 1.173c-.852.376-1.675.808-2.496 1.245l-2.469 1.297-2.402 1.412c-.8.472-1.606.933-2.372 1.458l-2.324 1.528c-.782.497-1.506 1.078-2.261 1.612-.741.554-1.51 1.07-2.226 1.654l-2.157 1.737c-.729.565-1.417 1.178-2.103 1.792l-2.063 1.83-1.971 1.919c-.656.639-1.319 1.271-1.93 1.951-5.031 5.298-9.451 11.078-13.066 17.194A99.518 99.518 0 0 0 5.18 64.379C.805 77.299-.45 90.402.134 102.237c-.126-4.872-.147-11.859.753-18.755zm141.132 90.446a96.807 96.807 0 0 0 8.765-6.389c-2.84 2.339-5.758 4.499-8.765 6.389zm40.217-54.282c-.299.901-.552 1.791-.882 2.641l-.957 2.523-.466 1.248-.513 1.231a108.54 108.54 0 0 0-.997 2.501 97.307 97.307 0 0 1-6.587 13.35c-2.521 4.275-5.443 8.281-8.565 12.04-1.542 1.899-3.222 3.66-4.874 5.421l-2.581 2.523c-.847.848-1.774 1.604-2.652 2.404-.736.64-1.478 1.266-2.225 1.882a90.696 90.696 0 0 0 7.896-7.312 89.808 89.808 0 0 1-11.689 10.188c-1.036.722-2.037 1.496-3.113 2.176l-3.247 2.069-3.43 1.949c-1.167.648-2.399 1.224-3.634 1.855a74.206 74.206 0 0 1 2.685-1.508c1.021-.567 2.092-1.237 3.138-1.85 1.054-.601 2.012-1.261 2.808-1.813.796-.552 1.42-1.01 1.745-1.306-.464.315-.936.617-1.406.924a92.477 92.477 0 0 0 1.507-1.015c-.021.023-.065.059-.101.091 10.932-7.466 20.245-17.277 27.223-28.462 7.009-11.175 11.57-23.781 13.46-36.601-.41 5.142-1.352 9.248-2.543 12.851zm-6.654-65.352zm-8.448-12.698a92.37 92.37 0 0 1 7.773 14.352c.25.549.486 1.106.719 1.664 4.963 12.154 7.221 25.192 6.89 38.036.084-4.25-.198-8.498-.669-12.71-.533-4.854-1.518-9.65-2.824-14.341-2.562-9.407-6.723-18.323-12.005-26.451.485.67.996 1.396 1.525 2.166a32.826 32.826 0 0 1 1.59 2.463l-.638-1.109-.689-1.079-1.378-2.156c-.938-1.424-1.955-2.796-2.934-4.192-1.062-1.334-2.069-2.712-3.174-4.011-.836-.953-1.637-1.938-2.485-2.879 2.992 3.155 5.801 6.54 8.299 10.247zM96.886 1.152c1.467.078 2.937.221 4.407.331 1.204.101 2.402.279 3.588.413.356.015.732.039 1.204.092.471.065 1.034.186 1.769.354 5.469.912 10.459 2.283 14.001 3.699 6.798 2.573 13.123 5.774 18.86 9.471 5.739 3.69 10.889 7.887 15.246 12.471 2.008 2.179 1.422 1.704.315.646l1.662 1.764c-.736-.734-1.459-1.478-2.206-2.196l-2.301-2.09c.56.49 1.918 1.663 2.845 2.522-7.389-7.539-16.026-13.799-25.375-18.404-9.356-4.603-19.431-7.446-29.502-8.581 1.618.18 2.412.22 3.168.24-1.085-.127-2.173-.301-3.274-.401-1.479-.097-2.955-.229-4.423-.301l-4.36-.103c1.444-.001 2.907.039 4.376.073z"></path><path xmlns="http://www.w3.org/2000/svg" d="M115.942 184.69l.426-.125c-.446.12-.885.252-1.334.366.304-.076.609-.15.908-.241zM160.424 146.151c4.235-5.587 7.977-12.263 10.366-18.014l-.029.006c-6.061 14.322-15.892 26.66-28.16 35.744a159.12 159.12 0 0 0 6.418-4.703c2.698-2.82 7.213-7.406 11.405-13.033zM35.35 162.846c7.172 6.412 15.821 11.992 25.448 15.751 3.754 1.413 7.585 2.651 11.503 3.523 1.944.502 3.929.812 5.899 1.181.987.175 1.987.272 2.979.412.994.129 1.986.275 2.987.333-4.519-.501-9.005-1.251-13.372-2.44-4.364-1.185-8.642-2.65-12.769-4.449a97.4 97.4 0 0 1-11.894-6.314c-3.786-2.408-7.376-5.097-10.781-7.997zM123.877 174.277l-2.219.871-2.266.756c-1.5.54-3.047.944-4.59 1.373 1.551-.39 3.111-.754 4.624-1.254l2.283-.698 2.23-.815c-.086-.044-.594.055-.062-.233zM97.683 179.965c-1.16.099-2.326.09-3.494.102-1.168.014-2.338.039-3.509-.038l1.576.148c.482.031.916.068 1.295.113 1.381-.118 2.752-.151 4.132-.325zM51.441 169.209c1.341.787 2.765 1.48 4.178 2.244.354.194.996.415 1.801.709-1.721-.739-3.37-1.655-5.046-2.505-.83-.441-1.629-.935-2.443-1.395-.812-.464-1.621-.927-2.389-1.445l.937.626.977.584 1.985 1.182z"></path></g><g id="SvgjsG1008" featurekey="symbolFeature-0" transform="matrix(1,0,0,1,106,73)" fill="#000000"><switch xmlns="http://www.w3.org/2000/svg"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"></foreignObject><g xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" i:extraneous="self"><path d="M18,86.5c0,2.475-2.025,4.5-4.5,4.5h-9C2.025,91,0,88.975,0,86.5v-28C0,56.025,2.025,54,4.5,54h9    c2.475,0,4.5,2.025,4.5,4.5V86.5z"></path><path d="M45,86.5c0,2.475-2.025,4.5-4.5,4.5h-9c-2.475,0-4.5-2.025-4.5-4.5v-50c0-2.475,2.025-4.5,4.5-4.5h9    c2.475,0,4.5,2.025,4.5,4.5V86.5z"></path><path d="M73,86.5c0,2.475-2.025,4.5-4.5,4.5h-9c-2.475,0-4.5-2.025-4.5-4.5v-73c0-2.475,2.025-4.5,4.5-4.5h9    c2.475,0,4.5,2.025,4.5,4.5V86.5z"></path><path d="M100,86.5c0,2.475-2.025,4.5-4.5,4.5h-9c-2.475,0-4.5-2.025-4.5-4.5v-46c0-2.475,2.025-4.5,4.5-4.5h9    c2.475,0,4.5,2.025,4.5,4.5V86.5z"></path></g></switch></g><g id="SvgjsG1009" featurekey="nameFeature-0" transform="matrix(1.751313531914052,0,0,1.751313531914052,48.92469339787454,165.57618084257646)" fill="#000000"><path d="M7.12 13.719999999999999 l0 10.48 l13.72 0 l0 2.8 l-13.72 0 l0 13 l-3.08 0 l0 -29.16 l18.08 0 l0 2.88 l-15 0 z M40.2 40.32 c-4 0 -7.72 -1.56 -10.32 -4.12 c-1.28 -1.28 -2.32 -2.84 -3.08 -4.68 c-0.76 -1.88 -1.16 -3.88 -1.16 -6 c0 -2.16 0.4 -4.2 1.2 -6.08 s1.84 -3.48 3.16 -4.76 c2.68 -2.6 6.4 -4.16 10.32 -4.16 c3.08 0 5.88 0.92 7.76 2.24 c0.96 0.64 1.8 1.4 2.56 2.24 c1.48 1.72 2.28 3.44 2.72 5.12 l-2.92 1.04 c-0.24 -0.96 -0.64 -2 -1.72 -3.52 c-0.56 -0.76 -1.16 -1.44 -1.88 -2.04 s-1.64 -1.12 -2.8 -1.52 c-1.16 -0.44 -2.4 -0.64 -3.8 -0.64 c-3.04 0 -5.96 1.24 -8 3.28 c-2.08 2.08 -3.4 5.16 -3.4 8.6 c0 2.28 0.48 4.36 1.48 6.2 c0.96 1.84 2.32 3.28 4.12 4.32 c1.72 1.04 3.68 1.56 5.84 1.56 c2.68 0 5 -0.92 6.4 -2.04 c0.72 -0.56 1.36 -1.2 1.92 -2 c0.56 -0.76 0.96 -1.44 1.24 -2 c0.24 -0.56 0.48 -1.16 0.68 -1.76 l2.92 1.04 c-0.44 1.56 -1.2 3.16 -2.68 4.96 c-0.72 0.88 -1.6 1.68 -2.52 2.36 c-1.92 1.36 -4.84 2.36 -8.04 2.36 z M80.4 40 l-3.2 -7.44 l-15.88 0 l-3.2 7.44 l-3.12 0 l12.56 -29.16 l3.48 0 l12.6 29.16 l-3.24 0 z M76.04 29.759999999999998 l-6.8 -15.76 l-6.76 15.76 l13.56 0 z M113.84 10.84 l4.4 0 l0 29.16 l-3.04 0 l0 -25 l0 0 l-10.84 25 l-2.76 0 l-10.76 -24.8 l0 0 l0 24.8 l-3.04 0 l0 -29.16 l4.36 0 l10.88 25 z"></path></g></svg> --> */}
      </a>

      <div class="landingNavbar-wrapper">

        <button type='submit' class="landingNavbar-menu-btn homepageBtn" data-navbar-toggle-btn>
          {/* <ion-icon name="menu-outline"></ion-icon> */}
        </button>

        <nav class="landingNavbar" data-navbar>

          <ul class="landingNavbar-list">

            <li class="nav-item">
              <a href="#home" class="nav-link">Home</a>
            </li>

            <li class="nav-item">
              <a href="#about" class="nav-link">Features</a>
            </li>

            <li class="nav-item">
              <a href="#features" class="nav-link">Our Team</a>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>

          </ul>

          <button type="button" class="btn btn-primary homepageBtn">Login</button>

        </nav>

      </div>

    </div>

  </header>





  <main>

    <article>

      {/* <!-- 
        - #superHero
      --> */}

      <section class="superHero" id="home">
        <div class="landingContainer">

          <div class="superHero-content">

            <h1 class="h1 superHero-title">Maintain your Feedbacks like never before.</h1>

            <p class="superHero-text">
              A way for college faculties to organise and maintain their feedbacks digitally with minimal efforts. All your progress under one roof.
            </p>

          </div>

          {/* <div class="superHero-banner"></div> */}

        </div>

      </section>





      {/* <!-- 
        - #ABOUT
      --> */}

      <section class="about" id="about">
        
        <div class="custom-shape-divider-top-1673187737">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"/>
          </svg>
      </div>
        <div class="landingContainer">

          <div class="about-top">

            <h2 class="h2 section-title">Features to Help your feedbacks thrive</h2>

            <p class="section-text">
              Our feedback management app is designed to help admins collect, organize, and act on Students feedback. Our app includes a range of features to support these objectives such as :
            </p>

            <ul class="about-list">

              <li>
                <div class="about-card">

                  <div class="card-icon">
                    {/* <ion-icon name="briefcase-outline"></ion-icon> */}
                  </div>

                  <h3 class="h3 card-title">Collection of feedback</h3>

                  <p class="card-text">
                    It allows you to gather feedback from students about faculty on various parameters through google forms along with inbuilt template.  
                  </p>

                </div>
              </li>

              <li>
                <div class="about-card">

                  <div class="card-icon">
                    {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                  </div>

                  <h3 class="h3 card-title">Organized Data</h3>

                  <p class="card-text">
                    Transforms feedback into action by helping you organize the data in a way that makes it easy to understand and executable.
                  </p>

                </div>
              </li>

              <li>
                <div class="about-card">

                  <div class="card-icon">
                    {/* <ion-icon name="rocket-outline"></ion-icon> */}
                  </div>

                  <h3 class="h3 card-title">Analysis of feedback</h3>

                  <p class="card-text">
                    Generating a report is as easy as clicking a button. It helps you identify trends and patterns to extract insights of feedback given by student.
                  </p>

                </div>
              </li>

            </ul>

          </div>

          <div class="custom-shape-divider-bottom-1673189152">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"/>
            </svg>
        </div>

        </div>
      </section>





      {/* <!-- 
        - #FEATURES
      --> */}

      <section class="features" id="features">
        <div class="landingContainer">

          <h2 class="h2 section-title">Meet the talented and dedicated individuals who make up our team</h2>

          <p class="section-text">
            We believe that collaboration and open communication are key to our success, and our team members are encouraged to share their ideas and insights. This creates a dynamic and innovative work environment that fosters creativity and continuous improvement.
          </p>

          <ul class="features-list">

            <li class="features-item">

              <figure class="features-item-banner">
                <img src="./assets/images/feature-1.png" alt="feature banner"/>
              </figure>

              <div class="feature-item-content">
                <h3 class="h2 item-title">Cover your everyday expenses</h3>

                <p class="item-text">
                  Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
                  ut labore et
                  dolore magna aliqua.
                </p>
              </div>

            </li>
            <li class="features-item">

              <figure class="features-item-banner">
                <img src="./assets/images/feature-1.png" alt="feature banner"/>
              </figure>

              <div class="feature-item-content">
                <h3 class="h2 item-title">Cover your everyday expenses</h3>

                <p class="item-text">
                  Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
                  ut labore et
                  dolore magna aliqua.
                </p>
              </div>

            </li>
            <li class="features-item">

              <figure class="features-item-banner">
                <img src="./assets/images/feature-1.png" alt="feature banner"/>
              </figure>

              <div class="feature-item-content">
                <h3 class="h2 item-title">Cover your everyday expenses</h3>

                <p class="item-text">
                  Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
                  ut labore et
                  dolore magna aliqua.
                </p>
              </div>

            </li>

            <li class="features-item">

              <figure class="features-item-banner">
                <img src="./assets/images/feature-1.png" alt="feature banner"/>
              </figure>

              <div class="feature-item-content">
                <h3 class="h2 item-title">Cover your everyday expenses</h3>

                <p class="item-text">
                  Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
                  ut labore et
                  dolore magna aliqua.
                </p>
              </div>

            </li>

          </ul>

        </div>
      </section>


      {/* <!-- 
        - #CONTACT
      --> */}

      <section class="contact" id="contact">
        <div class="landingContainer">

          <div class="contact-content">
            <h2 class="h2 contact-title">Get in touch with our team</h2>

            <figure class="contact-banner">
              <img src="./assets/images/contact.png" alt="contact banner"/>
            </figure>
          </div>

          <form action="" class="contact-form">

            <div class="input-wrapper">
              <label for="name" class="input-label">Name *</label>

              <input type="text" name="name" id="name" required placeholder="Type Name" class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="phone" class="input-label">Phone</label>

              <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="email" class="input-label">Email Address *</label>

              <input type="email" name="email" id="email" required placeholder="Type Email Address" class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="message" class="input-label">How can we help? *</label>

              <textarea name="message" id="message" placeholder="Type Description" required
                class="input-field"/>
            </div>

            <button type="submit" class="btn btn-primary homepageBtn">Send Message</button>

          </form>

        </div>
      </section>

    </article>

  </main>





  {/* <!-- 
    - #FOOTER
  --> */}

  <footer>

    {/* <!-- <div class="footer-top"> -->
      <!-- <div class="landingContainer">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src="" alt="FMS logo">
          </a>

          <p class="footer-text">Follow us on</p>

          <ul class="social-list">

            <li>
              <a href="https://github.com/codewithsadee" class="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://instagram.com/codewithsadee" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://youtube.com/c/codewithsadee" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <div class="footer-link-box"> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Company</h3>
            </li>

            <li>
              <a href="#" class="footer-link">About Us</a>
            </li>

            <li>
              <a href="#" class="footer-link">Features</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact Us</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Products</h3>
            </li>

            <li>
              <a href="#" class="footer-link">Blog</a>
            </li>

            <li>
              <a href="#" class="footer-link">Help Center</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Resources</h3>
            </li>

            <li>
              <a href="#" class="footer-link">FAQ’S</a>
            </li>

            <li>
              <a href="#" class="footer-link">Testimonial</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms & Conditions</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Relevent</h3>
            </li>

            <li>
              <a href="#" class="footer-link">Why</a>
            </li>

            <li>
              <a href="#" class="footer-link">Products</a>
            </li>

            <li>
              <a href="#" class="footer-link">Customers</a>
            </li>

          </ul> -->

        <!-- </div>

      </div>
    </div> --> */}

    <div class="footer-bottom">
      <p class="copyright">
        &copy; 2023 FCAM System All right reserved
      </p>
    </div>

  </footer>

    </div>;
};

export default LandingPage;
