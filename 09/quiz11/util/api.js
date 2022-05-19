export function API(url, data) {
  this.get = async function (url) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await res.text();
    } catch (err) {
      return "TypeError: Failed to fetch";
    }
  };
}
