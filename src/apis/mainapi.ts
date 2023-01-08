class MainApi {
  static readonly BASEURL: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://portfolio-api-g82t.onrender.com";

  static async sendContactDetails(email: string, message: string) {
    await fetch(`${this.BASEURL}/sendemail`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, message: message }),
    });
  }

  static async getIpaddress(): Promise<string> {
    const ipaddress = (
      await fetch("https://api.ipify.org/?format=json").then((res) =>
        res.json()
      )
    ).ip;

    return ipaddress;
  }

  static async sendVisitorInfo(
    clientFingerprint: number,
    ipaddress: string,
    metaData: string
  ) {
    await fetch(`${this.BASEURL}/storevistor`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientFingerprint: clientFingerprint,
        ipaddress: ipaddress,
        metaData: metaData,
      }),
    });
  }
}
export default MainApi;
