$base = "https://images.unsplash.com"
$q = "?w=1400&q=85&auto=format&fit=crop"

$good = @(
  "photo-1600585154340-be6161a56a0c",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600585152915-d208bec867a1",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600047509358-9dc75507daeb",
  "photo-1512917774080-9991f1c4c750",
  "photo-1600596542815-ffad4c1539a9",
  "photo-1600585154526-990dced4db0d",
  "photo-1497366216548-37526070297c",
  "photo-1497366811353-6870744d04b2",
  "photo-1600607687644-c7171b42498f",
  "photo-1600607687920-4e2a09cf159d",
  "photo-1600566752355-35792bedcfea",
  "photo-1556911220-bff31c812dba",
  "photo-1556912173-3bb406ef7e77",
  "photo-1534691601885-2b18af007add"
)

$categories = @(
  "aluminium-doors","aluminium-windows","porch-front-fixings","balcony-staircase",
  "glass-partitions","grill-glass-doors","kitchen-cabinets","casting-gates-grills",
  "window-wood-doors","rolling-shutters"
)

$poolIndex = 0

function Get-NextPhoto {
  param([int]$Index)
  return $good[$Index % $good.Length]
}

foreach ($cat in $categories) {
  $dir = "public/gallery/products/$cat"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  for ($i = 1; $i -le 10; $i++) {
    $out = Join-Path $dir ("{0:D2}.jpg" -f $i)
    $needs = -not (Test-Path $out) -or ((Get-Item $out -ErrorAction SilentlyContinue).Length -lt 5000)

    if (-not $needs) { continue }

    $attempts = 0
    while ($attempts -lt $good.Length) {
      $photo = Get-NextPhoto -Index ($poolIndex + $attempts)
      $url = "$base/$photo$q"
      curl.exe -L -s -o $out $url
      Start-Sleep -Milliseconds 400

      if ((Test-Path $out) -and (Get-Item $out).Length -ge 5000) {
        Write-Output "FIXED $out"
        $poolIndex++
        break
      }

      Remove-Item $out -ErrorAction SilentlyContinue
      $attempts++
    }

    if (-not (Test-Path $out)) {
      Write-Output "STILL MISSING $out"
    }
  }
}
