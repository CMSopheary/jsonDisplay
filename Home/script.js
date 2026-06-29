const LibrColor=[
  {
    "id": "4705d2ec-0c87-4af4-b444-a1974f4ce8d4",
    "titleEn": "Pink",
    "titleKh": "ផ្កាឈូក",
    "hex": "#ec4899",
    "displayOrder": 0,
    "createdAt": "2026-06-23T07:52:54.205Z",
    "updatedAt": "2026-06-23T07:52:54.205Z"
  },
  {
    "id": "edc2c838-a6a5-48dc-a70a-36d33af6f2aa",
    "titleEn": "Blue",
    "titleKh": "ខៀវ",
    "hex": "#004cff",
    "displayOrder": 1,
    "createdAt": "2026-06-23T07:56:14.358Z",
    "updatedAt": "2026-06-23T07:56:14.358Z"
  },
  {
    "id": "d41d46a2-774f-4e94-80f6-6830d757fadd",
    "titleEn": "Red",
    "titleKh": "ក្រហម",
    "hex": "#eb0000",
    "displayOrder": 2,
    "createdAt": "2026-06-23T07:56:34.553Z",
    "updatedAt": "2026-06-23T07:56:34.553Z"
  },
  {
    "id": "69834a5e-0628-41d6-bad9-6f522119e5b9",
    "titleEn": "Green",
    "titleKh": "បៃតង",
    "hex": "#4ead00",
    "displayOrder": 3,
    "createdAt": "2026-06-23T07:57:01.951Z",
    "updatedAt": "2026-06-23T07:57:01.951Z"
  },
  {
    "id": "07efc5c8-7592-4944-9844-6ca097eba613",
    "titleEn": "Light Green",
    "titleKh": "បៃតងខ្ចី",
    "hex": "#24ff65",
    "displayOrder": 4,
    "createdAt": "2026-06-23T07:57:24.901Z",
    "updatedAt": "2026-06-23T07:57:24.901Z"
  },
  {
    "id": "025f2e31-75d2-45d9-96d9-1dc64c8d9056",
    "titleEn": "Black",
    "titleKh": "ខ្មៅ",
    "hex": "#000000",
    "displayOrder": 5,
    "createdAt": "2026-06-23T07:57:45.568Z",
    "updatedAt": "2026-06-23T07:57:45.568Z"
  },
  {
    "id": "9cc232a7-86d9-4671-ac34-1cd42d4eb63b",
    "titleEn": "Yellow",
    "titleKh": "លឿង",
    "hex": "#ffea00",
    "displayOrder": 6,
    "createdAt": "2026-06-23T07:58:13.913Z",
    "updatedAt": "2026-06-23T07:58:13.913Z"
  },
  {
    "id": "de918dc9-eab0-4423-b75d-0c5d4fe27866",
    "titleEn": "Blue Sky",
    "titleKh": "ផ្ទៃមេឃ",
    "hex": "#00d5ff",
    "displayOrder": 7,
    "createdAt": "2026-06-23T07:58:35.678Z",
    "updatedAt": "2026-06-23T07:58:35.678Z"
  },
  {
    "id": "54759ef7-8ae6-4432-b004-8b504f4aa6c5",
    "titleEn": "Orange",
    "titleKh": "ទឹកក្រូច",
    "hex": "#ff571f",
    "displayOrder": 8,
    "createdAt": "2026-06-23T07:59:06.211Z",
    "updatedAt": "2026-06-23T07:59:06.211Z"
  }
]

const outPut = document.querySelector("#out-put");

for (let i = 0; i < LibrColor.length; i++) {
    renderColorCard(
        LibrColor[i].hex,
        LibrColor[i].titleEn,
        LibrColor[i].titleKh
    );
}

function renderColorCard(hex, titleEn, titleKh) {

    const div = document.createElement("div");

    div.className =
        "border border-slate-200 p-2 rounded-lg bg-slate-50 flex justify-between items-center";

    div.innerHTML = `
        <div class="flex items-center gap-2">
            <div
                class="border border-slate-200 w-12 h-12 rounded-full"
                style="background-color: ${hex};">
            </div>

            <div class="flex flex-col gap-1">
                <h2 class="text-sm">${titleEn}</h2>
                <span class="text-xs">${titleKh}</span>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <button class="cursor-pointer p-2 hover:bg-blue-200 text-blue-400 hover:text-blue-500 transition duration-200 text-xs rounded-md">
                <i class="fa-solid fa-pen"></i>
            </button>

            <button class="cursor-pointer p-2 hover:bg-red-200 text-red-400 hover:text-red-500 transition duration-200 text-xs rounded-md">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    outPut.appendChild(div);
}

