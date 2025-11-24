Add-Type -AssemblyName System.Drawing
$imagePath = "$PSScriptRoot\logo.png"
if (-not (Test-Path $imagePath)) {
    Write-Error "logo.png not found at $imagePath"
    exit 1
}

try {
    $bitmap = [System.Drawing.Bitmap]::FromFile($imagePath)
    $colors = @{}
    
    # Sample pixels
    $step = [Math]::Max(1, [Math]::Min($bitmap.Width, $bitmap.Height) / 50)
    
    for ($x = 0; $x -lt $bitmap.Width; $x += $step) {
        for ($y = 0; $y -lt $bitmap.Height; $y += $step) {
            $pixel = $bitmap.GetPixel($x, $y)
            if ($pixel.A -gt 200) { # Ignore transparent
                # Group similar colors by rounding
                $r = [Math]::Round($pixel.R / 10) * 10
                $g = [Math]::Round($pixel.G / 10) * 10
                $b = [Math]::Round($pixel.B / 10) * 10
                
                $key = "$r,$g,$b"
                if ($colors.ContainsKey($key)) { $colors[$key]++ } else { $colors[$key] = 1 }
            }
        }
    }
    
    $sorted = $colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5
    
    Write-Output "Top Colors:"
    $sorted | ForEach-Object {
        $rgb = $_.Key.Split(',')
        $hex = "#{0:X2}{1:X2}{2:X2}" -f [int]$rgb[0], [int]$rgb[1], [int]$rgb[2]
        Write-Output "$hex - Count: $($_.Value)"
    }
    
    $bitmap.Dispose()
} catch {
    Write-Error $_.Exception.Message
}
