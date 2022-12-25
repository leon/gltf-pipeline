"use strict";

const { RuntimeError } = require("cesium");

const dataUriToBuffer = require("../../lib/dataUriToBuffer");
const getImageExtension = require("../../lib/getImageExtension");

const pngData = dataUriToBuffer(
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQcDxwOcoRpqQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAFElEQVQI12P8//8/AwwwMSAB3BwAlm4DBdoYksUAAAAASUVORK5CYII="
);
const gifData = dataUriToBuffer(
  "data:image/gif;base64,R0lGODdhBAAEAIAAAP///////ywAAAAABAAEAAACBISPCQUAOw=="
);
const jpgData = dataUriToBuffer(
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAEAAQDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAVSf/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPyF//9oADAMBAAIAAwAAABCf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxB//9k="
);
const bmpData = dataUriToBuffer(
  "data:image/bmp;base64,Qk1mAAAAAAAAADYAAAAoAAAABAAAAAQAAAABABgAAAAAADAAAAATCwAAEwsAAAAAAAAAAAAA////////////////////////////////////////////////////////////////"
);
const ktx2Data = dataUriToBuffer(
  "data:image/ktx2:base64,q0tUWCAyMLsNChoKAAAAAAEAAABAAAAAQAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAaAAAACwAAACUAAAAdAAAAAgBAAAAAAAA7QEAAAAAAAD1AgAAAAAAAPgAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAIAKACjAQIAAwMAAAAAAAAAAAAAAAA/AAAAAAAAAAAA/////xIAAABLVFhvcmllbnRhdGlvbgByZAAAAFUAAABLVFh3cml0ZXIAdG9rdHggdjQuMC5iZXRhMi41My5nZjgzZDI4NDUuZGlydHkgLyBsaWJrdHggdjQuMC5iZXRhMi41MS5nM2EzMWQ0ZGEuZGlydHkAAAAAHQBfAEcAAAAcAQAAYgAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAACDAGwABAIBgclixPD5qPIA3EAEAAAJpL1qO+wKACQAAAAAAAAQCEAEAAABACMSHxYxC5qRfZDX/tDYozqTrsZwcLKFPOj8HAAjmamgUQQAA4G9md89jvYMNJJDEE0erNdUVV1pMAlpY6II/hRiwULCxywNMUggi6NVWCjb+FBYpBRcLawsfwLyBDyAEEpo8f13mE8N3+MzWN8aG0uInpReLBNfESNpLUhJjn6b0UYqK6fRJOijLPA7LtfXfpawtHOM5wslUOelTK5qmmCyvsvvBs9vv7W4xDJxWwcfD2u9chVzP234bZjCbzdBt9+rlcHEnF9Uqax51Mg7aopqvbDx89+Bm8yd0dfjyNdzXnWaTS7dwHQMKYiRu4hcUupGEncw9fArUMQahsqgFgqPLjReLeCFOmjpQB/VCqMhnZzzd2+xeHe83j+sRN/Cff4yZ8Q0Cxnpj/0d75e6dw3y0evn6/C0AwdsAARAGgie2geTzWDtGyh9KgpX8WJb+BoILSDZI+sB3AA8ABEAQhjVfWhkigV6/gQJxMCXBAADD9G9HsB/tCHQCO40d4H1eHXIIwiGiqaHGIEjX+AaACQAAAAAAEMRAAPxNflpzjZbtuGAsfCOdQtK6+1SN1+ekY6j7t75MEIfKzChq81nw7nJCXzrVkyZprvXxESlhruXkPYHimL3u9o3k57aC4TXqLc9ZhbxM8VrYjcZ4NtT2+55ZPICCeHUISHGmLmU+/LNbHx0jlpkCmnpHFAZSaHnCJ49gGUlMs7+K4PcBQ9KG618GBGDlxTULGQlp8NdIpU8tdzAFkCSPVU20irfukO/YSpScsCHeCglbH2ljLGR+7McSAoyLd9j0k06gjHZdYiPGpi0n6fX7PCd22juv/0qvP5YIoHnrGZEXMiFaw9chnA2C8POpNi0EQu/lwCZoILII"
);
const basisData = dataUriToBuffer(
  "data:image/basis;base64,c0ITAE0AAA9wAAAAqewBAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQBkAAAAKAAAAQCMAAAABQAAkQAAACsAAABNAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAvAAAAAEAAACPUwHABAAAAAAAAAICmAgAAAAAAEASBAATAAAAAAAAiABgAgAAAAAAABFUVVVVBQDBRAAAAAAAAPJfLQCYAAAAAAAAQAgAEwACAAAAAIgBwAQAAAAAAAACCAAA"
);
const avifData = dataUriToBuffer(
  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAA1QAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAIAAAACAAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAA1xtZGF0EgAKCRgZv/9ogQEDQjLEBhIQBdcoMUXBQNf/L/eolWm73i0VeEowT/mWhhXmXgA9NAjykCN286sJctGjr0fIAQPJYLg4tMy1dStWvpf+7oWbvXpBa6ltJftX56YehsVuUey63MoRrlslkQl5eEu/QEgWvm0g9D6TPJCVphOPGwhwBnHhHc+2PFfBknU4uFO9r///saRJb7xuzdYP7AAA1WB0PjkyVIs4ExGKLV/YgJrYnL4EbfM6CIHZ/8MzSUMe/z5gAAU0of24ZR/IGqm1/2oIlQjEs8nHUuXJrwkKS0DPEbmZNdY4qU+yNMRAUsEKYK/OgOu4/J08KilmNL8252ZW33MN/c29x9K+b01ywvElJ7NiohouAACHProFYjOMnFV7z+5xSHdkZv6/Jpm2o6EVJqLW33oF2oKk7Wp+GJtmfWwKKyPNkUQ58tO/bInwKinJfZB4nd9se98nnv1TSvIoblvLSIksfXeKrTLZttdU5z/tBXxYWwiTYacVFqKB9cy0+PJu3wDUJIpynXxXNpuHFYvjESETSZu0MYUrwoDRtK2up09W+TzuAs2oeEx3DPi3kxBcqEhXbZH/EQwibWzak4I26noOm4TuG73BoHXsF90GXRqynmPzuZUxkspdI7vCQceL1sgIEVxImM/MrKjmNgc1PpxIWziJ2TMhWsGqCamRI4QYcqGybagHEJR0wuq3C7vIOZtFYgRbKU5EByzJEMz2+6v8EFlf47waTSQ0pGDvROCDAQN7hKzcfIoR3XE1iyhmG404rw36LG6YJmehRPZuM1HTaDIe5rhFvC+irYkM4flawoVP9d9fCjB7nzKqaV1vRStly39k0vJdgkeU5oL2zGtAnS250z/pSyeaBd5R4RJb9hC3iQlri/PDrRhouNkTgHnhDgPUlpk/j42o5Jx1xyo3otZdiR/jpYI6AHTOcCYu6MLOH9T2ahhxuuPdSIt8LJ4bk4svCyDMoB71HNg7yPJbAYzdpuvlI/DvK1Q8Q4plruMUrIauWaIuQmBG/7IFeHE10jLsw4WxzNs8ywqD7Ffp+GoV6Q4twrDYdsYE1UsBw5QYMuRZJZM6Zms0jnABDL1k3gyPhBPX/YbRRlkGBtfhIOlNhc6azPClhTm5"
);
const textData = dataUriToBuffer("data:text/plain;charset=utf-8,randomtext");

describe("getImageExtension", () => {
  it("gets image extension from buffer", () => {
    expect(getImageExtension(pngData)).toBe(".png");
    expect(getImageExtension(gifData)).toBe(".gif");
    expect(getImageExtension(jpgData)).toBe(".jpg");
    expect(getImageExtension(bmpData)).toBe(".bmp");
    expect(getImageExtension(ktx2Data)).toBe(".ktx2");
    expect(getImageExtension(basisData)).toBe(".basis");
    expect(getImageExtension(avifData)).toBe(".avif");
  });

  it("throws error if buffer does not contain image data", () => {
    let thrownError;
    try {
      getImageExtension(textData);
    } catch (e) {
      thrownError = e;
    }
    expect(thrownError).toEqual(
      new RuntimeError("Image data does not have valid header")
    );
  });
});
