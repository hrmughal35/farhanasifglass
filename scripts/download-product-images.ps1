$base = "https://images.unsplash.com"
$q = "?w=1400&q=85&auto=format&fit=crop"

$categories = @{
  "aluminium-doors" = @(
    "photo-1600585154340-be6161a56a0c","photo-1600607687939-ce8a6c25118c",
    "photo-1600585152915-d208bec867a1","photo-1600566753190-17f0baa2a6c3",
    "photo-1600210492486-724fe5c67fb0","photo-1600047509358-9dc75507daeb",
    "photo-1512917774080-9991f1c4c750","photo-1600596542815-ffad4c1539a9",
    "photo-1564013799919-ab600027ffc6","photo-1605276374107-b6920b95273a"
  )
  "aluminium-windows" = @(
    "photo-1600607687644-c7171b42498f","photo-1600566752355-35792bedcfea",
    "photo-1600566753376-12c4564d05a3","photo-1600607687920-4e2a09cf159d",
    "photo-1497366216548-37526070297c","photo-1497366811353-6870744d04b2",
    "photo-1600585154526-990dced4db0d","photo-1600047509788-3d0e09794209",
    "photo-1600585154340-be6161a56a0c","photo-1600210492486-724fe5c67fb0"
  )
  "porch-front-fixings" = @(
    "photo-1600585154526-990dced4db0d","photo-1600047509358-9dc75507daeb",
    "photo-1512917774080-9991f1c4c750","photo-1600596542815-ffad4c1539a9",
    "photo-1564013799919-ab600027ffc6","photo-1605276374107-b6920b95273a",
    "photo-1600585152915-d208bec867a1","photo-1600566753190-17f0baa2a6c3",
    "photo-1600210492486-724fe5c67fb0","photo-1600585154340-be6161a56a0c"
  )
  "balcony-staircase" = @(
    "photo-1600566753190-17f0baa2a6c3","photo-1600607687920-4e2a09cf159d",
    "photo-1600607687939-ce8a6c25118c","photo-1600566752355-35792bedcfea",
    "photo-1600585152915-d208bec867a1","photo-1600210492486-724fe5c67fb0",
    "photo-1497366811353-6870744d04b2","photo-1600607687644-c7171b42498f",
    "photo-1600047509358-9dc75507daeb","photo-1512917774080-9991f1c4c750"
  )
  "glass-partitions" = @(
    "photo-1497366216548-37526070297c","photo-1497366811353-6870744d04b2",
    "photo-1600607687644-c7171b42498f","photo-1600566753376-12c4564d05a3",
    "photo-1600585154340-be6161a56a0c","photo-1600607687939-ce8a6c25118c",
    "photo-1556911220-bff31c812dba","photo-1600210492486-724fe5c67fb0",
    "photo-1600047509788-3d0e09794209","photo-1600566752355-35792bedcfea"
  )
  "grill-glass-doors" = @(
    "photo-1600585152915-d208bec867a1","photo-1600210492486-724fe5c67fb0",
    "photo-1600607687939-ce8a6c25118c","photo-1600585154340-be6161a56a0c",
    "photo-1600566753190-17f0baa2a6c3","photo-1600047509358-9dc75507daeb",
    "photo-1512917774080-9991f1c4c750","photo-1600596542815-ffad4c1539a9",
    "photo-1564013799919-ab600027ffc6","photo-1605276374107-b6920b95273a"
  )
  "kitchen-cabinets" = @(
    "photo-1556911220-bff31c812dba","photo-1556912173-3bb406ef7e77",
    "photo-1556911260-kb8a6e4a8b8e","photo-1556911220-e7576220724d",
    "photo-1600607687939-ce8a6c25118c","photo-1600585152915-d208bec867a1",
    "photo-1600210492486-724fe5c67fb0","photo-1497366216548-37526070297c",
    "photo-1600566753190-17f0baa2a6c3","photo-1600047509358-9dc75507daeb"
  )
  "casting-gates-grills" = @(
    "photo-1600047509358-9dc75507daeb","photo-1600607687920-4e2a09cf159d",
    "photo-1512917774080-9991f1c4c750","photo-1600596542815-ffad4c1539a9",
    "photo-1564013799919-ab600027ffc6","photo-1605276374107-b6920b95273a",
    "photo-1600585154526-990dced4db0d","photo-1600585152915-d208bec867a1",
    "photo-1600210492486-724fe5c67fb0","photo-1600585154340-be6161a56a0c"
  )
  "window-wood-doors" = @(
    "photo-1600210492486-724fe5c67fb0","photo-1600607687939-ce8a6c25118c",
    "photo-1600585152915-d208bec867a1","photo-1600585154340-be6161a56a0c",
    "photo-1600047509358-9dc75507daeb","photo-1512917774080-9991f1c4c750",
    "photo-1600596542815-ffad4c1539a9","photo-1564013799919-ab600027ffc6",
    "photo-1605276374107-b6920b95273a","photo-1600566753190-17f0baa2a6c3"
  )
  "rolling-shutters" = @(
    "photo-1534691601885-2b18af007add","photo-1513828583688-c52645db1e00",
    "photo-1504307651254-35680be35603","photo-1560518883-ce09059eeffa",
    "photo-1600585154526-990dced4db0d","photo-1600596542815-ffad4c1539a9",
    "photo-1512917774080-9991f1c4c750","photo-1605276374107-b6920b95273a",
    "photo-1600047509358-9dc75507daeb","photo-1564013799919-ab600027ffc6"
  )
}

foreach ($cat in $categories.Keys) {
  $dir = "public/gallery/products/$cat"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $i = 1
  foreach ($photo in $categories[$cat]) {
    $out = "$dir/$('{0:D2}' -f $i).jpg"
    $url = "$base/$photo$q"
    curl.exe -L -s -o $out $url
    $size = (Get-Item $out).Length
    if ($size -lt 5000) { Write-Output "FAIL $out ($size)" } else { Write-Output "OK   $out ($size)" }
    $i++
  }
}
