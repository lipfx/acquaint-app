class Roomz {
  id: string;
  text: string;

  constructor(roomzText: string) {
    this.text = roomzText;
    this.id = new Date().toISOString();
  }
}

export default Roomz;
