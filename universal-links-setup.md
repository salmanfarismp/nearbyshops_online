# Universal Links and App Links Server Configuration

This document contains the exact content for server-side files required to enable Universal Links (iOS) and App Links (Android).

## iOS - apple-app-site-association

### File Location
```
https://www.nearbyshops.online/.well-known/apple-app-site-association
```

### Important Notes
- **NO file extension** - The file must be named exactly `apple-app-site-association` (no `.json`)
- Must be served with `Content-Type: application/json`
- Must be accessible via HTTPS
- Must return HTTP 200 status code
- Must be accessible without authentication
- File should be served from both `nearbyshops.online` and `www.nearbyshops.online`

### File Content

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.com.anonymous.nearbyshops-frontend",
        "paths": [
          "/whatsapp*"
        ]
      }
    ]
  }
}
```

### Important: Replace TEAM_ID
You must replace `TEAM_ID` with your actual Apple Developer Team ID. You can find it:
1. In your Apple Developer account
2. In Xcode under your app's signing settings
3. Format: `ABC123DEF4` (10 characters)

### Example with Team ID
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABC123DEF4.com.anonymous.nearbyshops-frontend",
        "paths": [
          "/whatsapp*"
        ]
      }
    ]
  }
}
```

### Server Configuration Examples

#### Nginx
```nginx
location /.well-known/apple-app-site-association {
    default_type application/json;
    add_header Content-Type application/json;
    return 200 '{"applinks":{"apps":[],"details":[{"appID":"TEAM_ID.com.anonymous.nearbyshops-frontend","paths":["/whatsapp*"]}]}}';
}
```

#### Apache (.htaccess)
```apache
<Files "apple-app-site-association">
    Header set Content-Type "application/json"
</Files>
```

#### Node.js/Express
```javascript
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "TEAM_ID.com.anonymous.nearbyshops-frontend",
          "paths": ["/whatsapp*"]
        }
      ]
    }
  });
});
```

---

## Android - assetlinks.json

### File Location
```
https://www.nearbyshops.online/.well-known/assetlinks.json
```

### Important Notes
- File must be named `assetlinks.json`
- Must be served with `Content-Type: application/json`
- Must be accessible via HTTPS
- Must return HTTP 200 status code
- Must be accessible without authentication
- Requires SHA-256 fingerprints of your app signing certificates

### File Content Template

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.anonymous.nearbyshops_frontend",
      "sha256_cert_fingerprints": [
        "REPLACE_WITH_SHA256_FINGERPRINT_1",
        "REPLACE_WITH_SHA256_FINGERPRINT_2"
      ]
    }
  }
]
```

### How to Get SHA-256 Fingerprints

#### For Debug Build (Development)
```bash
# Using keytool (comes with Java)
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep SHA256
```

#### For Release Build (Production)
```bash
# Replace with your actual keystore path and alias
keytool -list -v -keystore /path/to/your/keystore.jks -alias your-key-alias
```

#### Using Expo
If using Expo managed workflow, you'll need to:
1. Build the app with EAS Build
2. Get the signing certificate from EAS
3. Extract SHA-256 fingerprint from the certificate

#### Example Output
The fingerprint will look like:
```
SHA256: A1:B2:C3:D4:E5:F6:...
```

**Important**: Remove the `SHA256:` prefix and colons when adding to assetlinks.json. Use format: `A1B2C3D4E5F6...`

### Example with Fingerprints
```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.anonymous.nearbyshops_frontend",
      "sha256_cert_fingerprints": [
        "A1B2C3D4E5F6789012345678901234567890ABCDEF1234567890ABCDEF1234",
        "FEDCBA0987654321FEDCBA0987654321FEDCBA0987654321FEDCBA0987654321"
      ]
    }
  }
]
```

### Server Configuration Examples

#### Nginx
```nginx
location /.well-known/assetlinks.json {
    default_type application/json;
    add_header Content-Type application/json;
    return 200 '[{"relation":["delegate_permission/common.handle_all_urls"],"target":{"namespace":"android_app","package_name":"com.anonymous.nearbyshops_frontend","sha256_cert_fingerprints":["YOUR_SHA256_FINGERPRINT"]}}]';
}
```

#### Apache (.htaccess)
```apache
<Files "assetlinks.json">
    Header set Content-Type "application/json"
</Files>
```

#### Node.js/Express
```javascript
app.get('/.well-known/assetlinks.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.anonymous.nearbyshops_frontend",
        "sha256_cert_fingerprints": [
          "YOUR_SHA256_FINGERPRINT_HERE"
        ]
      }
    }
  ]);
});
```

---

## Testing

### iOS Universal Links
1. Send yourself a link: `https://www.nearbyshops.online/whatsapp?data=test&mobileApp=1`
2. Open it in Safari
3. The app should open directly (no redirect)
4. If it doesn't work, check:
   - File is accessible: `curl https://www.nearbyshops.online/.well-known/apple-app-site-association`
   - Content-Type header is correct
   - Team ID is correct

### Android App Links
1. Send yourself a link: `https://www.nearbyshops.online/whatsapp?data=test&mobileApp=1`
2. Open it in Chrome
3. The app should open directly (no chooser dialog)
4. If it doesn't work, check:
   - File is accessible: `curl https://www.nearbyshops.online/.well-known/assetlinks.json`
   - Content-Type header is correct
   - SHA-256 fingerprints are correct
   - Package name matches exactly

### Verification Tools

#### iOS
- Apple's validator: Not publicly available, but you can test manually
- Check file accessibility: `curl -I https://www.nearbyshops.online/.well-known/apple-app-site-association`

#### Android
- Google's validator: https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://www.nearbyshops.online&relation=delegate_permission/common.handle_all_urls
- Check file accessibility: `curl https://www.nearbyshops.online/.well-known/assetlinks.json`

---

## Troubleshooting

### iOS Issues
- **File not found**: Ensure file is at exact path `/.well-known/apple-app-site-association` (no extension)
- **Wrong content type**: Must be `application/json`
- **Team ID wrong**: Verify in Apple Developer account
- **Paths not matching**: Ensure paths in file match URL paths exactly

### Android Issues
- **Fingerprint mismatch**: Re-verify SHA-256 fingerprint matches your signing certificate
- **Package name mismatch**: Must match exactly `com.anonymous.nearbyshops_frontend`
- **File not accessible**: Ensure HTTPS and no authentication required
- **Wrong content type**: Must be `application/json`

### General Issues
- **Works in browser but not app**: Clear app data and reinstall
- **Works sometimes**: May need to wait for OS to re-verify (can take hours)
- **Simulator issues**: Universal/App Links work best on real devices

---

## Next Steps

1. **Get your Apple Team ID** and update `apple-app-site-association`
2. **Get your Android SHA-256 fingerprints** and update `assetlinks.json`
3. **Deploy both files** to your server at the exact paths specified
4. **Test on real devices** (iOS and Android)
5. **Verify file accessibility** using curl or browser
6. **Test deep links** by sending yourself WhatsApp links

