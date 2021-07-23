import React, { HTMLAttributes } from 'react'
import styles from './logo.module.css'

export const Logo = ({
  ...props
}: HTMLAttributes<SVGElement>) => (
  <svg aria-label="Wanda Design System" role="img" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#E00" d="M0 0h48v48H0z" />
    <path d="M34.614 12.99l-10.09 12.276L22 23.525l6.485-7.903V12.99h-3.582l-6.58 8.004-2.475-1.702 3.013-3.669V12.99h-3.586l-5.34 6.505-.156.19v3.981L26.27 35.011l11.91-14.524.041-.055V12.99h-3.608zm3.227 7.318l-11.653 14.2-16.021-11.034v-3.353l15.551 10.71 12.123-14.765v4.242zm-27.59-.6l5.203-6.33h3.025v2.104l-3.193 3.895 3.109 2.146 6.686-8.144h3.052v2.103l-6.698 8.12 3.162 2.178L34.79 13.379h3.052v2.08L25.634 30.314 10.252 19.708z" fill="#fff" stroke="#fff" strokeWidth=".77" strokeMiterlimit="10" />
    <path className={styles.DesktopOnly} d="M68.978 23h3.456l3.116-11.327h.07L78.724 23h3.456l4.486-16.903H83l-2.683 12.112h-.07L77.131 6.097h-3.104l-3.116 12.112h-.07L68.17 6.097h-3.667L68.978 23zm21.449.2c1.651 0 2.986-.786 3.701-2.074h.07V23h3.42v-8.61c0-2.53-2.096-4.205-5.34-4.205-3.316 0-5.307 1.663-5.495 3.983l-.011.14h3.127l.024-.105c.164-.808.937-1.406 2.214-1.406 1.335 0 2.061.691 2.061 1.804v.773l-3.104.188c-3.116.199-4.884 1.534-4.884 3.818v.024c0 2.214 1.698 3.795 4.217 3.795zm-.832-3.972v-.023c0-.89.69-1.453 2.015-1.535l2.588-.164v.902c0 1.312-1.124 2.296-2.659 2.296-1.183 0-1.944-.55-1.944-1.476zM99.833 23h3.42v-7.216c0-1.64.972-2.764 2.507-2.764 1.534 0 2.308.937 2.308 2.577V23h3.42v-8.106c0-2.94-1.57-4.709-4.334-4.709-1.898 0-3.186.879-3.831 2.32h-.07v-2.062h-3.42V23zm18.472.258c1.816 0 3.198-.914 3.866-2.402h.07V23h3.421V6.097h-3.421v6.524h-.07c-.679-1.522-2.085-2.436-3.866-2.436-3.162 0-5.107 2.436-5.107 6.525v.011c0 4.077 1.945 6.537 5.107 6.537zm1.148-2.835c-1.71 0-2.776-1.417-2.776-3.702v-.011c0-2.296 1.078-3.69 2.776-3.69 1.652 0 2.8 1.429 2.8 3.69v.011c0 2.273-1.136 3.702-2.8 3.702zm12.23 2.776c1.651 0 2.987-.785 3.701-2.073h.071V23h3.42v-8.61c0-2.53-2.097-4.205-5.341-4.205-3.316 0-5.307 1.663-5.494 3.983l-.012.14h3.128l.023-.105c.164-.808.937-1.406 2.214-1.406 1.335 0 2.062.691 2.062 1.804v.773l-3.105.188c-3.115.199-4.884 1.534-4.884 3.818v.024c0 2.214 1.698 3.795 4.217 3.795zm-.832-3.97v-.024c0-.89.691-1.453 2.015-1.535l2.589-.164v.902c0 1.312-1.125 2.296-2.659 2.296-1.184 0-1.945-.55-1.945-1.476z" fill="var(--global-foreground)" />
    <path className={styles.DesktopOnly} d="M65.438 44h3.867c3.351 0 5.32-2.086 5.32-5.633v-.015c0-3.54-1.977-5.625-5.32-5.625h-3.868V44zm1.406-1.266v-8.742h2.367c2.5 0 3.977 1.625 3.977 4.375v.016c0 2.742-1.461 4.351-3.977 4.351h-2.367zm13.484 1.414c1.984 0 3.188-1.125 3.477-2.265l.015-.063h-1.36l-.03.07c-.227.508-.93 1.047-2.07 1.047-1.5 0-2.462-1.015-2.5-2.757h6.062v-.532c0-2.515-1.39-4.218-3.68-4.218-2.289 0-3.773 1.78-3.773 4.383v.007c0 2.64 1.453 4.328 3.86 4.328zm-.094-7.507c1.243 0 2.164.789 2.305 2.453h-4.656c.148-1.602 1.101-2.453 2.351-2.453zm8.688 7.507c1.914 0 3.375-1.039 3.375-2.539v-.015c0-1.203-.766-1.89-2.352-2.274l-1.297-.312c-.992-.242-1.414-.602-1.414-1.172v-.016c0-.742.735-1.258 1.735-1.258 1.015 0 1.672.461 1.851 1.126h1.336c-.187-1.376-1.414-2.258-3.18-2.258-1.788 0-3.132 1.054-3.132 2.453v.008c0 1.21.71 1.898 2.289 2.273l1.305.313c1.039.25 1.468.648 1.468 1.218v.016c0 .766-.804 1.305-1.937 1.305-1.078 0-1.75-.461-1.977-1.164h-1.39c.156 1.39 1.445 2.296 3.32 2.296zm6.203-10.195a.94.94 0 00.938-.937.94.94 0 00-.938-.938.94.94 0 00-.938.938.94.94 0 00.938.937zM94.437 44h1.36v-8.422h-1.36V44zm7.391 2.969c2.297 0 3.75-1.203 3.75-3.086v-8.305h-1.359v1.39h-.094c-.516-.952-1.437-1.538-2.625-1.538-2.203 0-3.563 1.71-3.563 4.07v.016c0 2.359 1.352 4.047 3.532 4.047 1.156 0 2.109-.524 2.64-1.454h.125v1.703c0 1.243-.898 1.954-2.406 1.954-1.211 0-1.96-.453-2.11-1.094l-.007-.008h-1.406l-.016.008c.211 1.383 1.508 2.297 3.539 2.297zm-.062-4.61c-1.563 0-2.438-1.172-2.438-2.843V39.5c0-1.672.875-2.867 2.438-2.867 1.554 0 2.5 1.195 2.5 2.867v.016c0 1.672-.938 2.843-2.5 2.843zM108.109 44h1.36v-4.984c0-1.477.851-2.383 2.195-2.383 1.344 0 1.969.726 1.969 2.242V44h1.359v-5.453c0-2-1.054-3.117-2.945-3.117-1.242 0-2.031.523-2.453 1.414h-.125v-1.266h-1.36V44zm17.711.266c2.516 0 4.164-1.313 4.164-3.422v-.008c0-1.625-.929-2.57-3.281-3.094l-1.25-.281c-1.531-.336-2.148-.945-2.148-1.844v-.008c0-1.18 1.086-1.843 2.492-1.851 1.469-.008 2.406.726 2.562 1.719l.016.101h1.406l-.008-.11c-.117-1.679-1.687-3.007-3.937-3.007-2.328 0-3.961 1.32-3.969 3.187v.008c0 1.633.977 2.672 3.235 3.172l1.25.274c1.546.343 2.195.984 2.195 1.921v.008c0 1.149-1.117 1.938-2.649 1.938-1.625 0-2.796-.711-2.898-1.836l-.008-.086h-1.406l.008.086c.164 1.836 1.758 3.133 4.226 3.133zm7.055 2.687c1.492 0 2.187-.547 2.883-2.437l3.289-8.938h-1.43l-2.305 6.93h-.124l-2.313-6.93h-1.453l3.117 8.43-.156.5c-.305.969-.774 1.32-1.547 1.32-.188 0-.398-.008-.563-.039v1.117c.188.032.422.047.602.047zm10.625-2.805c1.914 0 3.375-1.039 3.375-2.539v-.015c0-1.203-.766-1.89-2.352-2.274l-1.296-.312c-.993-.242-1.415-.602-1.415-1.172v-.016c0-.742.735-1.258 1.735-1.258 1.015 0 1.672.461 1.851 1.126h1.336c-.187-1.376-1.414-2.258-3.179-2.258-1.789 0-3.133 1.054-3.133 2.453v.008c0 1.21.711 1.898 2.289 2.273l1.305.313c1.039.25 1.468.648 1.468 1.218v.016c0 .766-.804 1.305-1.937 1.305-1.078 0-1.75-.461-1.977-1.164h-1.39c.156 1.39 1.445 2.296 3.32 2.296zm8.398-.086c.266 0 .524-.03.79-.078v-1.156c-.25.024-.383.031-.626.031-.874 0-1.218-.398-1.218-1.39v-4.766h1.844v-1.125h-1.844v-2.18h-1.406v2.18h-1.329v1.125h1.329v5.11c0 1.609.726 2.25 2.46 2.25zm6.133.086c1.985 0 3.188-1.125 3.477-2.265l.015-.063h-1.359l-.031.07c-.227.508-.93 1.047-2.071 1.047-1.5 0-2.46-1.015-2.5-2.757h6.063v-.532c0-2.515-1.391-4.218-3.68-4.218s-3.773 1.78-3.773 4.383v.007c0 2.64 1.453 4.328 3.859 4.328zm-.093-7.507c1.242 0 2.164.789 2.304 2.453h-4.656c.148-1.602 1.102-2.453 2.352-2.453zM163.734 44h1.36v-5.219c0-1.187.836-2.148 1.937-2.148 1.063 0 1.75.648 1.75 1.648V44h1.36v-5.414c0-1.07.773-1.953 1.945-1.953 1.187 0 1.758.617 1.758 1.86V44h1.359v-5.82c0-1.766-.961-2.75-2.68-2.75-1.164 0-2.125.586-2.578 1.476h-.125c-.39-.875-1.187-1.476-2.328-1.476-1.101 0-1.898.523-2.273 1.43h-.125v-1.282h-1.36V44z" fill="var(--global-foreground)" />
  </svg>
)
