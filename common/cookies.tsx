export function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2 && parts!=null) return parts?.pop()?.split(';').shift();
  }
  